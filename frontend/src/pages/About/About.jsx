import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useEffect } from "react";
import "./About.css"

export const About=()=>{
    const { user,userAuthentication } = useAuth();
    //for handle refresh page issue to get automatic user name in about page
    useEffect(() => {
        userAuthentication();
      },[] );
    
    return(
        <>
      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container about-grid">
            {/* Hero Content */}
            <div className="about-content">
              <p className="about-welcome">
                Welcome,
                {user
                  ? ` ${user.username} to OnlineVoting App`
                  : ` to Our Online Voting App`}
              </p>
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
                <NavLink to="/service">
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
      </main>
    </>
    );
};