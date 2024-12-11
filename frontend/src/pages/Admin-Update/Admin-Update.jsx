import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Admin-Update.css"


export const AdminUpdate = () => {
  const navigate=useNavigate();
    const [data,setData] = useState({
      username: "",
      email: "",
      phone: "",
    });
    
    const params=useParams();
    const { authorizationToken,API } = useAuth();


    
    const handleInput = (e) => { 
      let name=e.target.name;
      let value=e.target.value;
      setData({
        ...data,
        [name]:value,
      })  
    };

    //to update the data dynamically
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          //connect backend url
          const response=await fetch(`${API}/api/admin/users/update/${params.id}`,{
            method:"PATCH",
            headers:{
                Authorization:authorizationToken,
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
        });
        if(response.ok){
          toast.success("Updated Successfull");
          setData({
            username:"",
            email: "",
            phone: "",
          });
          navigate("/admin/users");
        }else{
          toast.error("Not Updated");
        }
        } catch (error) {
          console.log(error);
          
        }
    };


  
    
  
    //get sigle user data
    const getSingleUserData=async()=>{
        try {
            //connect to backend url
            const response=await fetch(`${API}/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=await response.json();
            console.log(`users single data:${data}`);
            //store the single user data into state variable so that we access it into the input field(username,email,phone)=>autofill ho jayega
            setData(data);

        } catch (error) {
            console.log(error);
            
        }
        
    };

    useEffect(()=>{
        getSingleUserData();
    },[]);
    
  
    return (
        <>
          <section className="section-contact">
            <div className="container grid grid-two-cols">
              {/* Contact Form Content */}
              <section className="section-form">
                <form onSubmit={handleSubmit}>
                  <h1 className="update-form-heading">Update User Data</h1>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      value={data.username}
                      onChange={handleInput}
                      required
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInput}
                      required
                    />
                  </div>
      
                  <div className="form-group">
                    <button type="submit">Update</button>
                  </div>
                </form>
              </section>
            </div>
          </section>
        </>
      );
      
      
};