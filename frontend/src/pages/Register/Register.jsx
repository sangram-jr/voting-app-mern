import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "./Register.css"
//const URL="http://localhost:5000/api/auth/register";

export const Register = () => {

  const navigate=useNavigate();
  const {storeTokenInLS,API }=useAuth();
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  //handle input field on submit
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit =async (e) => {
    e.preventDefault();
    //console.log(user);

    //connect backend , same as postman using fetch method
    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data=await response.json();
      console.log("response from registation:",res_data.extraDetails);
      //handle empty Form after submit and go to login page after submit registation form
      if(response.ok){
        toast.success("please verify your email");
        //token save in localStorage
        
        storeTokenInLS(res_data.token);
        
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",

        });
        navigate("/verify");
      }else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
      }
      //console.log("response data : ", response);
    } catch (error) {
      console.error("Error", error); 
    }

  };



  return (
    <>
      <section className="registration-section">
    <div className="registration-container">
      <h1 className="registration-title">Registration Form</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={user.phone}
            onChange={handleInput}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInput}
            placeholder="Create a password"
            required
          />
        </div>

        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </div>
  </section>
    </>
  );
};