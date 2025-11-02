/*
import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-page">
      /* Hero Section 
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

      /* Features Section 
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

      /* Call-to-Action Section 
      <section className="cta">
        <div className="container">
          <h2>Join Millions of Voters</h2>
          <p>Experience the future of voting today. Register and make your voice count.</p>
          <NavLink to="/voting">
            <button className="btn-secondary">Start Voting</button>
          </NavLink>          
        </div>
      </section>
      
      /* about Section 
      <section className="about-hero">
          <div className="container about-grid">
            /* Hero Content 
            <div className="about-content">
              
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
            /* Hero Image 
            <div className="about-image">
              <img
                src="https://t3.ftcdn.net/jpg/08/27/07/70/240_F_827077030_vurGJvoPWzparJpFrNt7gONK1HWrIJvw.jpg"
                alt="Online Voting Illustration"
                className="responsive-img"
              />
            </div>
          </div>
        </section>
    </div>
  );
};
*/





import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// SVG Icon Components - self-contained, no imports needed
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 1.944c.998 0 1.945.24 2.803.68l.19.096c.34.17.65.385.926.64a5.985 5.985 0 012.137 4.117c.02.34.028.683.028 1.023 0 2.686-.86 5.18-2.433 7.03-.39.457-.82.87-1.286 1.23a1 1 0 01-1.414 0c-.466-.36-1.88-1.55-2.73-2.39C7.14 13.92 6 11.646 6 9.5c0-.34.008-.683.028-1.023a5.985 5.985 0 012.137-4.117 5.98 5.98 0 01.926-.64l.19-.096A5.99 5.99 0 0110 1.944zM8.707 11.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 12.586l-1.293-1.293z" clipRule="evenodd" />
  </svg>
);
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.944A5.965 5.965 0 0110 8c.482 0 .95.057 1.402.164l-3.064 3.064a.996.996 0 01-1.414 0l-.592-.592a.996.996 0 010-1.414l.001-.001.001-.001zM10 16a5.965 5.965 0 01-4.243-1.757l6.407-6.407A6 6 0 0110 16z" clipRule="evenodd" />
  </svg>
);
const ChartLineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 11h16v2H2z" />
        <path fillRule="evenodd" d="M3.293 6.707a1 1 0 011.414 0L8 10.001l2.293-2.294a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0L3.293 8.121a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);
const HeadsetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H5v-2H3v-1h2v-2H3v-1h2V8a6 6 0 1112 0zm-2 0a4 4 0 10-8 0v2h8V8z" clipRule="evenodd" />
  </svg>
);
const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M16.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L12 15.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const features = [
  { title: "Secure Voting", description: "We use advanced encryption techniques to ensure your vote is safe and secure.", icon: <ShieldIcon /> },
  { title: "Global Access", description: "No matter where you are, our platform allows you to cast your vote seamlessly.", icon: <GlobeIcon /> },
  { title: "Transparent Results", description: "Our real-time tracking ensures transparency, giving you confidence in the process.", icon: <ChartLineIcon /> },
  { title: "Quick Setup", description: "With an intuitive interface, you can register and start voting in just a few minutes.", icon: <ClockIcon /> },
  { title: "24/7 Support", description: "Our dedicated team is available round the clock to assist you with any queries.", icon: <HeadsetIcon /> },
  { title: "User-Friendly", description: "Designed with simplicity in mind, our platform is accessible for everyone.", icon: <UserCheckIcon /> },
];

// Renaming to App to avoid export issues in some environments
export const Home = () => {
  // This effect will be used for the scroll-triggered animations
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
  }, []);


  return (
    <>
      <style>{`
        /* Using a common root class to avoid conflicts with global body styles */
        .home-page-container {
            font-family: 'Inter', sans-serif;
            background-color: #111827;
            color: #F9FAFB;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* --- Hero Section --- */
        .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 40px 20px;
            overflow: hidden;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 800;
            color: white;
            margin-bottom: 0.5rem;
        }

        .hero-content h2 {
            font-size: 2rem;
            font-weight: 600;
            color: #FF6347; /* Tomato color */
            margin-bottom: 1.5rem;
        }

        .hero-content p {
            font-size: 1.2rem;
            color: #d1d5db; /* Lighter gray */
            margin-bottom: 2.5rem;
            line-height: 1.6;
        }

        /* --- Animated Shapes Background --- */
        .animated-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .animated-shapes div {
            position: absolute;
            display: block;
            width: 20px;
            height: 20px;
            background: rgba(255, 99, 71, 0.2);
            animation: float 25s linear infinite;
            bottom: -150px;
            border-radius: 50%;
        }

        .animated-shapes div:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
        .animated-shapes div:nth-child(2) { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
        .animated-shapes div:nth-child(3) { left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
        .animated-shapes div:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
        .animated-shapes div:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
        .animated-shapes div:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
        .animated-shapes div:nth-child(7) { left: 35%; width: 150px; height: 150px; animation-delay: 7s; }
        .animated-shapes div:nth-child(8) { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }
        .animated-shapes div:nth-child(9) { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; }
        .animated-shapes div:nth-child(10) { left: 85%; width: 150px; height: 150px; animation-delay: 0s; animation-duration: 11s; }

        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
        }

        /* --- General Section Styling --- */
        .features-section, .about-section, .cta-section {
            padding: 80px 0;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }

        .section-subtitle {
            font-size: 1.1rem;
            color: #9ca3af;
            margin-bottom: 3rem;
        }

        /* --- Features Section --- */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            padding: 2.5rem 2rem;
            border-radius: 1rem;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .feature-icon {
            color: #FF6347;
            margin-bottom: 1.5rem;
            display: inline-block;
        }
        
        .feature-icon svg {
            height: 2.5rem;
            width: 2.5rem;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
            margin-bottom: 1rem;
        }

        .feature-card p {
            color: #d1d5db;
            line-height: 1.6;
        }

        /* Glassmorphism Effect */
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* --- Call to Action Section --- */
        .cta-section {
            background: linear-gradient(45deg, #FF6347, #ff7e5f);
            padding: 60px 20px;
            border-radius: 1rem;
            margin: 80px auto;
            max-width: 1200px;
        }

        .cta-section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }

        .cta-section p {
            font-size: 1.2rem;
            color: white;
            margin-bottom: 2rem;
        }

        /* --- About Section --- */
        .about-section {
            background-color: #1f2937; /* Slightly lighter bg for contrast */
        }

        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-content .section-title {
            text-align: left;
        }

        .about-text {
            font-size: 1.1rem;
            color: #d1d5db;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .about-btn-group {
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
        }

        .about-image .responsive-img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* --- Buttons --- */
        .btn {
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-block;
            text-decoration: none;
        }

        .btn-primary {
            background-color: #FF6347;
            color: white;
            box-shadow: 0 4px 15px rgba(255, 99, 71, 0.3);
        }

        .btn-primary:hover {
            background-color: #e55a40;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 99, 71, 0.4);
        }

        .btn-secondary {
            background-color: white;
            color: #FF6347;
        }

        .btn-secondary:hover {
            background-color: #f3f4f6;
            transform: translateY(-3px);
        }

        .btn-outline {
            background-color: transparent;
            color: white;
            border: 2px solid #FF6347;
        }

        .btn-outline:hover {
            background-color: #FF6347;
            color: white;
        }

        /* --- Fade-in Animation --- */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Text alignment for CTA and section titles */
        .text-center {
           text-align: center;
        }
        
        .mb-12 {
            margin-bottom: 3rem;
        }

        /* --- Responsive Design --- */
        @media (max-width: 992px) {
            .about-grid {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .about-content .section-title {
                text-align: center;
            }
            .about-btn-group {
                justify-content: center;
            }
        }

        @media (max-width: 768px) {
            .hero-content h1 { font-size: 2.8rem; }
            .hero-content h2 { font-size: 1.8rem; }
            .section-title { font-size: 2.2rem; }
        }

        @media (max-width: 480px) {
            .hero-content h1 { font-size: 2.2rem; }
            .hero-content h2 { font-size: 1.5rem; }
            .hero-content p { font-size: 1rem; }
            .btn { padding: 0.8rem 1.8rem; }
        }
      `}</style>
      <div className="home-page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="animated-shapes">
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div>
          </div>
          <div className="hero-content">
            <h1 className="fade-in">Online Voting</h1>
            <h2 className="fade-in" style={{transitionDelay: '0.2s'}}>Secure, Easy, and Accessible</h2>
            <p className="fade-in" style={{transitionDelay: '0.4s'}}>
              Shape the future of democracy with secure and efficient online
              voting. Cast your vote anytime, anywhere, and make your voice
              count!
            </p>
            <div className="fade-in" style={{transitionDelay: '0.6s'}}>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="text-center mb-12">
                <h2 className="section-title fade-in">Why Choose Us?</h2>
                <p className="section-subtitle fade-in" style={{transitionDelay: '0.2s'}}>Unparalleled security and ease of use.</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card glass-card fade-in" style={{transitionDelay: `${index * 0.1}s`}}>
                  <div className="feature-icon">
                      {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta-section">
          <div className="container text-center">
            <h2 className="fade-in">Join Millions of Voters</h2>
            <p className="fade-in" style={{transitionDelay: '0.2s'}}>Experience the future of voting today. Register and make your voice count.</p>
            <div className="fade-in" style={{transitionDelay: '0.4s'}}>
              <NavLink to="/voting">
                <button className="btn btn-secondary">Start Voting</button>
              </NavLink>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="about-section">
            <div className="container about-grid">
              <div className="about-content fade-in">
                <h2 className="section-title">Why Our Online Voting App?</h2>
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
                <div className="about-btn-group">
                  <NavLink to="/contact">
                    <button className="btn btn-primary">Connect Now</button>
                  </NavLink>
                  <NavLink to="/">
                    <button className="btn btn-outline">Learn More</button>
                  </NavLink>
                </div>
              </div>
              <div className="about-image fade-in" style={{transitionDelay: '0.2s'}}>
                <img
                  src="https://t3.ftcdn.net/jpg/08/27/07/70/240_F_827077030_vurGJvoPWzparJpFrNt7gONK1HWrIJvw.jpg"
                  alt="Online Voting Illustration"
                  className="responsive-img"
                />
              </div>
            </div>
          </section>
      </div>
    </>
  );
};

export default Home;


