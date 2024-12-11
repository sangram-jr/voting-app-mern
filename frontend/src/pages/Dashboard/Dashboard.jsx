import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../store/auth";
import "./Dashboard.css"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';


/*export const Dashboard=()=>{
    //import authorizationToken
    const {API}=useAuth();
    //create a state variable where we store our all user data
    const [users,setUsers]=useState([]);

    const getAllUsersData=async()=>{
        try {
            //fetch the backend url
            const response=await fetch(`${API}/api/count/dashboard`,{
                method:"GET",
            });
            const data=await response.json();
            //console.log(`users ${data}`);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    

    useEffect(()=>{
        getAllUsersData();
    },[]);


    return(
        <div  className='list add flex-col'>
            <h1>Voting Dashboard</h1>
            <div className="list-table">
                <div className="list-table-format title">
                    <h2>Candidate</h2>
                    <h2>party</h2>
                    <h2>Vote Count</h2>
                </div>
                {users.map((currUser,index)=>{
                    return(
                        <div key={index} className="list-table-format">
                            <p>{currUser.name}</p>
                            <p>{currUser.party}</p>
                            <p>{currUser.count}</p>
                              
                        </div>
                    )
                })}
            </div>
      
        </div>
    );
}*/
export const Dashboard=()=>{
    //import authorizationToken
    const {API}=useAuth();
    //create a state variable where we store our all user data
    const [users,setUsers]=useState([]);
    // Register chart components
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

    const chartData = {
        labels: users.map((user) => user.name || "Unknown"),
        datasets: [
          {
            data: users.map((user) => user.count || 0), // Default to 0 if count is undefined
            backgroundColor: [
              "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
            ],
            hoverBackgroundColor: [
              "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
            ],
          },
        ],
      };

    const getAllUsersData=async()=>{
        try {
            //fetch the backend url
            const response=await fetch(`${API}/api/count/dashboard`,{
                method:"GET",
            });
            const data=await response.json();
            //console.log(`users ${data}`);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    

    useEffect(()=>{
        getAllUsersData();
        
    },[]);


    


    return(
      <div className="dashboard">
  <h1 className="dashboard-title">Voting Dashboard</h1>
  <div className="dashboard-content">
    {/* Left Section: Pie Chart */}
    <div className="dashboard-chart">
      <h2>Vote Distribution</h2>
      <Pie data={chartData} />
    </div>

    {/* Right Section: Candidate Form */}
    <div className="dashboard-form">
      <div className="form-header">
        <h2>Leading Candidate</h2>
        <h2>Party</h2>
        <h2>Vote Count</h2>
      </div>
      {users.map((user, index) => (
        <div key={index} className="form-row">
          <div className="form-cell">{user.name}</div>
          <div className="form-cell">{user.party}</div>
          <div className="form-cell">{user.count}</div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
