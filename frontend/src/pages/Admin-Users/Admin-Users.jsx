import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import React from 'react';
import "./Admin-Users.css"
import { AiFillDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

export const AdminUsers=()=>{
    //import authorizationToken
    const {authorizationToken,API}=useAuth();
    //create a state variable where we store our all user data
    const [users,setUsers]=useState([]);

    const getAllUsersData=async()=>{
        try {
            //fetch the backend url
            const response=await fetch(`${API}/api/admin/users`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=await response.json();
            console.log(`users ${data}`);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    //delete the user on delete button
    const deleteUser=async(id)=>{
        try {
            //connect to backend url
            const response=await fetch(`${API}/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=response.json();
            console.log(`users after delete:${data}`);
            //hanle the refresh page issue
            if(response.ok){
                toast.success("Updated Successfull");
                getAllUsersData();
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
    };

    useEffect(()=>{
        getAllUsersData();
    },[]);


    return (
      <div className="user-list-container">
        <h1 className="user-list-heading">All Users List</h1>
        <div className="user-table">
          {/* Table Header */}
          <div className="user-table-header">
            <div className="user-column">Users</div>
            <div className="user-column">Email</div>
            <div className="user-column">Phone</div>
            <div className="user-column">Update</div>
            <div className="user-column">Delete</div>
          </div>
    
          {/* Table Rows */}
          {users.map((currUser, index) => (
            <div key={index} className="user-table-row">
              <div className="user-cell">{currUser.username}</div>
              <div className="user-cell">{currUser.email}</div>
              <div className="user-cell">{currUser.phone}</div>
              <div className="user-cell">
                <Link to={`/admin/users/${currUser._id}/edit`} className="user-edit-link">
                  <GrEdit />
                </Link>
              </div>
              <div className="table-delete-btn">
                <AiFillDelete onClick={() => deleteUser(currUser._id)}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
      
    
    
}