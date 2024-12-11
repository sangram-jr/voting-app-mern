import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "./Voting.css"
import { useNavigate } from "react-router-dom";

export const Voting=()=>{
    //import authorizationToken
    const {API,authorizationToken}=useAuth();
    const navigate=useNavigate();
    //create a state variable where we store our all user data
    const [users,setUsers]=useState([]);
   

    const getAllUsersData=async()=>{
        try {
            //fetch the backend url
            const response=await fetch(`${API}/api/data/voting`,{
                method:"GET",
            });
            const data=await response.json();
            //console.log(`users ${data}`);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    const AddedUser=async(id)=>{
        //console.log("Candidate ID sent:", id);
        try {
            //connect to backend url
            const response=await fetch(`${API}/api/data/voting/${id}`,{
                method:"POST",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            const data=await response.json();
            //console.log(`votes after added:${data}`);
            //hanle the refresh page issue
            if(response.ok){
                toast.success("vote recorded successfully");
                getAllUsersData();
                navigate("/dashboard");
            }
            
            else{
                toast.error("you have already voted");
            }
            
        } catch (error) {
            console.log(error);
            
        }
        
    };


    

    useEffect(()=>{
        getAllUsersData();
    },[]);


    /*return(
        <div  className='list add flex-col'>
            <h1>Voting</h1>
            <div className="list-table">
                <div className="list-table-format title">
                    <h2>Name</h2>

                    <h2>party</h2>

                    <h2>Vote</h2>
                </div>
                {users.map((currUser,index)=>{
                    //console.log("User ID:", currUser._id);
                    return(
                        <div key={index} className="list-table-format">
                            <h3>{currUser.name}</h3>
                            <h3>{currUser.party}</h3>
                            <button onClick={()=>AddedUser(currUser._id)}>Vote here</button>   
                        </div>
                    )
                })}
            </div>
      
        </div>
    );*/
    return (
        <div className="voting-container">
          <h1 className="voting-title">Voting Machine</h1>
          <div className="voting-list">
            {/* Table Header */}
            <div className="list-header">
              <div className="header-cell">Logo</div>
              <div className="header-cell">Candidate</div>
              <div className="header-cell">Party</div>
              <div className="header-cell">Action</div>
            </div>
      
            {/* Table Rows */}
            {users.map((currUser, index) => (
              <div key={index} className="list-row">
                <div className="logo-cell">
                  <img
                    src={`${API}/image/${currUser.image}`}
                    alt="Candidate Logo"
                    className="logo-image"
                  />
                </div>
                <div className="list-cell candidate-cell">{currUser.name}</div>
                <div className="list-cell party-cell">{currUser.party}</div>
                <div className="list-cell action-cell">
                  <button
                    className="vote-btn"
                    onClick={() => AddedUser(currUser._id)}
                  >
                    Confirm Your Vote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
           
}