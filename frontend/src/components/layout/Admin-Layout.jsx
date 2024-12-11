import {Navigate, NavLink, Outlet} from 'react-router-dom'
import { FaUserGroup } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { useAuth } from '../../store/auth';
import "./Admin-Layout.css"

export const AdminLayout=()=>{

    //get all user data
    const {user,isLoading}=useAuth();
    console.log("admin layout",user);
    //if isLoading true
    if(isLoading){
        return <h1>Loading....</h1>
    }
    //else isLoading is false means now response mil gata
    if(!user.isAdmin){
        return <Navigate to="/" />;
    }
    
    return (
        <div className="admin-layout">
          <header className="admin-header">
            <div className="admin-container">
              <nav className="admin-nav">
                <ul>
                 <li>
                    <NavLink to="/admin/candidates"><FaUserGroup />CANDIDATES</NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/candidates/add"><IoAddCircle />ADD CANDIDATE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/users"><FaUserGroup />USERS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/contacts"><FaMessage />CONTACTS</NavLink>
                  </li>
                  
                  
                </ul>
              </nav>
            </div>
          </header>
          <main className="admin-main">
            <Outlet />
          </main>
        </div>
      );
      
}