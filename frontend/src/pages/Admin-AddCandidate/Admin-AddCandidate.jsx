/*import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
//const URL="http://localhost:5000/api/auth/login";
import { toast } from "react-toastify";
import "./Admin-AddCandidate.css"

export const AdminAddCandidates = () => {
  const navigate=useNavigate();
  const {authorizationToken,API}=useAuth();
  
  const [user, setUser] = useState({
    name: "",
    party: "",
    age:"",
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
      const response = await fetch(`${API}/api/admin/candidates/add`, {
        method: "POST",
        headers: {
           Authorization:authorizationToken,
           "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data=await response.json();
      console.log("response from login:",res_data);
      //handle empty Form after submit and go to login page after submit registation form
      if(response.ok){
        toast.success("Candidate added ");
        //token save in localStorage
        
        //storeTokenInLS(res_data.token);

        setUser({
          name: "",
          party: "",
          age:"",
        });
        navigate("/admin/candidates");
      }else{
        //toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        toast.error("Not Added");
        console.log("invalid credential");
        
      }
      //console.log("response data : ", response);
    } catch (error) {
      console.error("Error", error); 
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="container grid grid-two-cols">
      
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <h1 className="update-form-heading">Add Candidate</h1>
              <div className="form-group">
                <label htmlFor="name">Cadidate Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleInput}
                  required
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="party">Party</label>
                <input
                  type="text"
                  name="party"
                  id="party"
                  autoComplete="off"
                  value={user.party}
                  onChange={handleInput}
                  required
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  autoComplete="off"
                  value={user.age}
                  onChange={handleInput}
                  required
                />
              </div>
  
              <div className="form-group">
                <button type="submit">Add Candidate</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
  
  
};*/
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./Admin-AddCandidate.css"
//import { assets } from '../../assets'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminAddCandidates = () => {

  //const navigate=useNavigate();
  const {authorizationToken,API}=useAuth();
  console.log("Authorization Token:", authorizationToken);

  
    
    const[image,setImage]=useState(false);
    const[data,setData]=useState({
        name: "",
        party: "",
        age:"",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("party", data.party);
        formData.append("age", Number(data.age));
        //formData.append("category", data.category);
        formData.append("image", image);
        try {
          const response = await axios.post(
            `${API}/api/admin/candidates/add`,
            formData,
            {
                headers: {
                    Authorization: authorizationToken, 
                },
            }
          );
          if (response.data.success) {           
              setData({
                  name: "",
                  party: "",
                  age: "",
              })
              setImage(false);
              toast.success(response.data.message)
          }
          else {
              toast.error(response.data.message)
          }
          
        } catch (error) {
          if (error.response) {
              console.error('Backend responded with error:', error.response.data);
              toast.error(error.response.data.message || 'An error occurred');
          } else if (error.request) {
              console.error('No response received:', error.request);
              toast.error('No response from the server');
          } else {
              console.error('Error setting up request:', error.message);
              toast.error('Error setting up request');
          }
      }
        
    }


    return (
      <div className='add'>
          <form className="flex-col" onSubmit={onSubmitHandler}>
              <div className="add-img-upload flex-col">
                  <p>Upload Image</p>
                  <label htmlFor='image'>
                      <img src={image?URL.createObjectURL(image):"/images/upload_area.png"}/>
                  </label>
                  <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
              </div>
              <div className="add-product-name flex-col">
                  <p>Candidate Name</p>
                  <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
              </div>
              <div className="add-product-description flex-col">
                  <p>Party</p>
                  <input onChange={onChangeHandler} value={data.party} type="text" name='party' placeholder='party' required/>
              </div>
              <div className="add-category-price">
                  <div className="add-price flex-col">
                      <p>Age</p>
                      <input onChange={onChangeHandler} value={data.age} type='Number' name='age' placeholder='age'/>
                  </div>
              </div>
              <button type='submit' className='add-btn'>ADD</button>
          </form> 
      </div>
    )
}

