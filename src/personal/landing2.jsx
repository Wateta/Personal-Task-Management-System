import '../personal/landing2.css';

function LandingPage2() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h1 className="ptns">📚</h1>
          <h1 className="ptns2">PTMS</h1>
        </div>

        <nav className="nav">
          <a href="/" className="a">Home</a>
          <a href="#about" className="a">About</a>
          <a href="#features" className="a">Features</a>
          <div className="a3-div">
            <a href="/login" className="a a3">Login</a>
          </div>
        </nav>
      </header>

      <main>

        
        <section className="hero">
          <h1 className="hero-title">
            Organize Your Life. Track Your Tasks.
          </h1>
          <p className="hero-text">
            PTMS helps you manage tasks efficiently by tracking
            Pending, In Progress, and Completed activities.
          </p>
          <button className="btn-primary">Get Started</button>
        </section>

        
        <section id="features" className="features">
          <h2>✨ Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📌 Create Tasks</h3>
              <p>Add and organize your daily activities easily.</p>
            </div>

            <div className="feature-card">
              <h3>🔄 Track Progress</h3>
              <p>Move tasks between Pending, In Progress, and Completed.</p>
            </div>

            <div className="feature-card">
              <h3>📊 Monitor Productivity</h3>
              <p>Stay aware of your completed work and progress.</p>
            </div>
          </div>
        </section>

       
        <section className="how-it-works">
          <h2>🛠 How It Works</h2>
          <ol>
            <li>Create an account</li>
            <li>Add your tasks</li>
            <li>Update their status</li>
            <li>Track your productivity</li>
          </ol>
        </section>

       
        <section className="cta">
          <h2>Start Managing Your Tasks Smarter Today</h2>
          <button className="btn-primary">Create Free Account</button>
        </section>

      </main>

     
      <footer className="footer">
        <p>© 2026 PTMS. All rights reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage2;