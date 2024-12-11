import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "./Admin-Contacts.css"
import { AiFillDelete } from "react-icons/ai";

export const AdminContacts=()=>{
    //import authorizationToken
    const {authorizationToken,API}=useAuth();
    //create a state variable where we store our all user data
    const [contactData,setContactData]=useState([]);

    const getAllContactsData=async()=>{
        try {
            //fetch the backend url
            const response=await fetch(`${API}/api/admin/contacts`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=await response.json();
            //console.log(`contacts data: ${data}`);
            setContactData(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    //delete the contact on delete button
    const deleteContact=async(id)=>{
        try {
            //connect to backend url
            const response=await fetch(`${API}/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=response.json();
            console.log(`contacts after delete:${data}`);
            //hanle the refresh page issue
            if(response.ok){
                toast.success("Contact Deleted");
                getAllContactsData();
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
    };

    useEffect(()=>{
        getAllContactsData();
    },[]);


    return (
        <div className="contact-list">
          <h1 className="list-heading">All Contact List</h1>
          <div className="list-table">
            {/* Table Header */}
            <div className="list-table-header">
              <div className="table-column">Name</div>
              <div className="table-column">Email</div>
              <div className="table-column">Message</div>
              <div className="table-column">Delete</div>
            </div>
      
            {/* Table Rows */}
            {contactData.map((currContact, index) => (
              <div key={index} className="list-table-row">
                <div className="table-cell">{currContact.username}</div>
                <div className="table-cell">{currContact.email}</div>
                <div className="table-cell">{currContact.message}</div>
                <div className="table-delete-btn">
                  <AiFillDelete onClick={() => deleteContact(currContact._id)}/> 
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
}