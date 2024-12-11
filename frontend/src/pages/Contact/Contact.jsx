/*import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "./Contact.css"

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  
  //hanle auto-fill contact field
  const { user,API } = useAuth();

  //console.log("frontend user ", user.email);

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(contact);

    //send contact data into the database
    try {
      const response=await fetch(`${API}/api/form/contact`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });
      if(response.ok){
        setContact({

          message:"",
        });
        const data=await response.json();
        //console.log(data);
        toast.success("Messege send successfully"); 
      }

    } catch (error) {
      toast.error("Message not send");
      console.log(error);
      
    }

  };

 


  return (
    <>
  <section className="contact-section">
    <div className="contact-container">
      <div className="contact-form-container">
        <h1 className="form-heading">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={contact.username}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={contact.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message"
              value={contact.message}
              onChange={handleInput}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

    
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
          alt="Contact Illustration"
          className="responsive-image"
        />
      </div>
    </div>
  </section>
</>

  );
};*/


import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "./Contact.css";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { user, API } = useAuth();
  

  // Populate contact fields with user data when user changes
  useEffect(() => {

    if (user) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
    } else {
      setContact({
        username: "",
        email: "",
        message: "",
      });
    }
  }, [user]); // Runs whenever the `user` object changes


  // Handle input changes
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          username: user.username || "",
          email: user.email || "",
          message: "",
        });
        const data = await response.json();
        toast.success("Message sent successfully!");
      } else {
        toast.error("Message not sent");
      }
    } catch (error) {
      toast.error("Message not sent");
      console.error("Error sending contact message:", error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form-container">
          <h1 className="form-heading">Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="username"
                placeholder="Enter your name"
                value={contact.username} // Controlled input
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={contact.email} // Controlled input
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message"
                value={contact.message} // Controlled input
                onChange={handleInput}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            alt="Contact Illustration"
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
};
