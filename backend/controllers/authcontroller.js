const { userRegisterSchema, userLoginSchema } = require('../middlewaare/userjoi');
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');

const register = async (req, res) => {
    try {
        // Validate input
        const { error, value } = userRegisterSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: value.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(value.password, salt);

        // Generate Verification Code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
        const verificationCodeExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

        // Create new user
        const user = await User.create({
            name: value.name,
            email: value.email,
            password: hashedPassword,
            verificationCode,
            verificationCodeExpires
        });

        // Send Email
        const message = `Your verification code is: ${verificationCode}\nThis code will expire in 15 minutes.`;
        try {
            await sendEmail({
                email: user.email,
                subject: 'Verify Your Email',
                message
            });
            console.log(`Verification email sent to ${user.email}`);
        } catch (emailError) {
            console.error('Error sending email:', emailError.message);
            // Don't fail registration if email fails, but log it
            console.warn(`Email failed for user ${user._id}, but registration succeeded`);
        }

        res.status(201).json({
            message: 'User registered successfully. Please check your email for the verification code.',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Server error during registration: ' + err.message });
    }
};

const login = async (req, res) => {
    try {
        // Validate input
        const { error, value } = userLoginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        // Find user by email
        const user = await User.findOne({ email: value.email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if verified
        if (!user.isVerified) {
            return res.status(403).json({ message: 'Please verify your email before logging in' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(value.password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const payload = {
            id: user._id,
            role: user.role
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'fallback_secret_key', {
            expiresIn: '1d'
        });

        res.json({
            message: 'Logged in successfully',
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during login' });
    }
};

const verifyEmail = async (req, res) => {
    try {
        const { email, code } = req.body;
        if (!email || !code) {
            return res.status(400).json({ message: 'Email and verification code are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: 'Email is already verified' });
        }

        // Check code and expiration
        if (user.verificationCode !== code) {
            return res.status(400).json({ message: 'Invalid verification code' });
        }

        if (user.verificationCodeExpires < Date.now()) {
            return res.status(400).json({ message: 'Verification code has expired. Please register again or request a new one.' });
        }

        // Verify user
        user.isVerified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        res.json({ message: 'Email verified successfully. You can now log in.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during email verification' });
    }
};

module.exports = {
    register,
    login,
    verifyEmail
};