import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Online Voting</h1>
          <h2>Secure, Easy, and Accessible</h2>
          <p>
            Shape the future of democracy with secure and efficient online
            voting. Cast your vote anytime, anywhere, and make your voice
            count!
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            {[
              {
                title: "Secure Voting",
                description:
                  "We use advanced encryption techniques to ensure your vote is safe and secure. Your data is fully protected.",
                icon: "fas fa-shield-alt",
              },
              {
                title: "Global Access",
                description:
                  "No matter where you are in the world, our platform allows you to cast your vote seamlessly.",
                icon: "fas fa-globe",
              },
              {
                title: "Transparent Results",
                description:
                  "Our real-time tracking system ensures transparency in results, giving you confidence in the voting process.",
                icon: "fas fa-chart-line",
              },
              {
                title: "Quick Setup",
                description:
                  "With an intuitive interface, you can register and start voting in just a few minutes.",
                icon: "fas fa-clock",
              },
              {
                title: "24/7 Support",
                description:
                  "Our dedicated team is available round the clock to assist you with any queries or issues.",
                icon: "fas fa-headset",
              },
              {
                title: "User-Friendly",
                description:
                  "Designed with simplicity in mind, our platform is accessible and easy to use for everyone.",
                icon: "fas fa-user-check",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Join Millions of Voters</h2>
          <p>Experience the future of voting today. Register and make your voice count.</p>
          <NavLink to="/voting">
            <button className="btn-secondary">Start Voting</button>
          </NavLink>          
        </div>
      </section>
      {/* How It Works Section 
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {[
              { title: "Login", description: "Securely log into your account and access the platform." },
              { title: "Register", description: "Sign up and verify your identity in just a few steps." },
              { title: "Vote", description: "Choose your candidate and cast your vote securely." },
              { title: "Dashboard", description: "Track live election updates and monitor results." },
              { title: "Contact Us", description: "Reach out to our team for any assistance or support." },
              { title: "Get Results", description: "Access real-time and accurate voting results instantly." },
            ].map((step, index) => (
              <div key={index} className="step-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
      {/* about Section */}
      <section className="about-hero">
          <div className="container about-grid">
            {/* Hero Content */}
            <div className="about-content">
              {/*<h1 className="about-title">Why Choose Our Online Voting App?</h1>*/}
              <p className="about-text">
                Online voting apps revolutionize the way elections are conducted.
                They provide a secure, convenient, and accessible platform for
                casting votes from anywhere in the world.
              </p>
              <p className="about-text">
                Our app prioritizes transparency, ensuring every vote is counted
                accurately and securely. With real-time tracking and tamper-proof
                technology, you can trust the election results.
              </p>
              <p className="about-text">
                Whether you’re participating in local elections, organizational
                polls, or global decision-making processes, our app offers the
                tools and support you need to make your voice heard.
              </p>
              <div className="about-btn-group">
                <NavLink to="/contact">
                  <button className="btn btn-primary">Connect Now</button>
                </NavLink>
                <NavLink to="/">
                  <button className="btn btn-secondary">Learn More</button>
                </NavLink>
              </div>
            </div>
            {/* Hero Image */}
            <div className="about-image">
              <img
                src="https://t3.ftcdn.net/jpg/08/27/07/70/240_F_827077030_vurGJvoPWzparJpFrNt7gONK1HWrIJvw.jpg" /* Replace with your image URL */
                alt="Online Voting Illustration"
                className="responsive-img"
              />
            </div>
          </div>
        </section>
    </div>
  );
};


