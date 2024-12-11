import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "./Admin-Candidates.css";
import { AiFillDelete } from "react-icons/ai";
 
export const AdminCandidates=()=>{
    //import authorizationToken
    const {authorizationToken,API}=useAuth();
    //create a state variable where we store our all user data
    const [users,setUsers]=useState([]);

    const getAllCandidateData=async()=>{
        try {
            //fetch the backend url
            const response=await fetch(`${API}/api/admin/candidates`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=await response.json();
            //console.log(`candidates: ${data}`);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    //delete the user on delete button
    const deleteCandidate=async(id)=>{
        try {
            //connect to backend url
            const response=await fetch(`${API}/api/admin/candidates/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                }
            });
            const data=response.json();
            //console.log(`candidate after delete:${data}`);
            //hanle the refresh page issue
            if(response.ok){
                toast.success("Candidate Deleted");
                getAllCandidateData();
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
    };

    useEffect(()=>{
        getAllCandidateData();
    },[]);


    return (
        <div className="candidate-list">
          <h1>All Candidate List</h1>
          <div className="list-table">
            {/* Table Header */}
            <div className="list-table-header">
              <div className="table-column">Candidate Name</div>
              <div className="table-column">Party</div>
              <div className="table-column">Age</div>
              <div className="table-column">Delete</div>
            </div>
      
            {/* Table Rows */}
            {users.map((currUser, index) => (
              <div key={index} className="list-table-row">
                <div className="table-cell">{currUser.name}</div>
                <div className="table-image"><img src={`${API}/image/`+currUser.image} alt="" /></div>
                <div className="table-cell">{currUser.age}</div>
                <div className="table-delete-btn">
                  {/*<button onClick={() => deleteCandidate(currUser._id)}>Delete</button>*/}
                  <AiFillDelete onClick={() => deleteCandidate(currUser._id)}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    
}