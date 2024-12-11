import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
//const URL="http://localhost:5000/api/auth/login";
import { toast } from "react-toastify";
import "./Login.css"

export const Login = () => {
  const navigate=useNavigate();
  const {storeTokenInLS ,API}=useAuth();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  // let handle the input field value
  const handleInput = (e) => {
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
    //connect backend , same as postman using fetch method
    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data=await response.json();
      //console.log("response from login:",res_data);
      //handle empty Form after submit and go to login page after submit registation form
      if(response.ok){
        toast.success("Login successfull");
        //token save in localStorage
        
        storeTokenInLS(res_data.token);

        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }else{
        
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        
        console.log("invalid credential");
        toast.error("invalid credential");
        
      }
      //console.log("response data : ", response);
    } catch (error) {
      console.error("Error", error); 
    }
  };


  return (
    <>  
      <section className="login-section">  
        <div className="login-container">  
          <h1 className="login-heading">Login Form</h1>  
          <div className="login-form-wrapper">  
            <form className="login-form" onSubmit={handleSubmit}>  
              <div className="form-group">  
                <label htmlFor="email">Email</label>  
                <input  
                  type="text"  
                  name="email"  
                  placeholder="Enter your email"  
                  value={user.email}  
                  onChange={handleInput}  
                  required  
                />  
              </div>  
              <div className="form-group">  
                <label htmlFor="password">Password</label>  
                <input  
                  type="password"  
                  name="password"  
                  placeholder="Enter your password"  
                  value={user.password}  
                  onChange={handleInput}  
                  required  
                />  
              </div>  
              <button type="submit" className="submit-btn">Submit</button>  
            </form>  
          </div>  
        </div>  
      </section>  
    </>  
  );
};
