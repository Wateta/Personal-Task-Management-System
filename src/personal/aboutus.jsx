import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaPlusCircle, FaListAlt, FaCheckCircle, FaChartLine } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../personal/aboutUs.css";

const features = [
  {
    title: "Add Your Tasks",
    description: "Easily create tasks with title, description, due date, and priority level.",
    icon: <FaPlusCircle size={28} />,
    number: "01"
  },
  {
    title: "Organize & Categorize",
    description: "Sort your tasks by project, category, or priority to stay on top of everything.",
    icon: <FaListAlt size={28} />,
    number: "02"
  },
  {
    title: "Track Progress",
    description: "Mark tasks as complete and monitor your productivity over time with charts.",
    icon: <FaChartLine size={28} />,
    number: "03"
  },
  {
    title: "Achieve Your Goals",
    description: "Stay productive, meet deadlines, and accomplish more every single day.",
    icon: <FaCheckCircle size={28} />,
    number: "04"
  },
];

const stats = [
  { value: "100%", label: "Free to use" },
  { value: "3", label: "Task states" },
  { value: "5", label: "Categories" },
  { value: "∞", label: "Tasks you can add" },
];

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-hero-tag">✦ Personal Task Management</div>
        <h1 className="about-hero-title">
          Built to keep you <br />
          <span className="about-hero-accent">focused & organised</span>
        </h1>
        <p className="about-hero-desc">
          PTMS is a clean, powerful task manager designed to help individuals
          take control of their time, track what matters, and get things done.
        </p>
        <div className="about-hero-btns">
          <Link to="/signup">
            <button className="about-btn-primary">
              Get Started <ArrowRight size={18} />
            </button>
          </Link>
          <Link to="/" className="about-btn-ghost">
            <FaArrowLeft size={14} /> Go Back
          </Link>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="about-stats">
        {stats.map((s, i) => (
          <div key={i} className="about-stat-item">
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <div className="about-how">
        <div className="about-section-tag">How it works</div>
        <h2 className="about-section-title">Everything you need to <span className="about-hero-accent">stay productive</span></h2>

        <div className="about-features">
          {features.map((f, i) => (
            <div key={i} className="about-feature-card">
              <div className="about-feature-top">
                <div className="about-feature-icon">{f.icon}</div>
                <span className="about-feature-number">{f.number}</span>
              </div>
              <h3 className="about-feature-title">{f.title}</h3>
              <p className="about-feature-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="about-cta">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Ready to take control of your tasks?</h2>
          <p className="about-cta-desc">Join PTMS today and start organising your life, one task at a time.</p>
          <Link to="/signup">
            <button className="about-btn-primary">
              Create Free Account <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;