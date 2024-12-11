import React  from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../store/auth"; // Import the useAuth hook
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {

  const { isLoggedIn } = useAuth(); // Access isLoggedIn from the context

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
      
      toast.error("You Are Not Logged In", { toastId: "notLoggedIn" }); // Prevent duplicate toasts
      return <Navigate to="/register" replace />;
  }

  // If logged in, render the children
  return children;
};

export default ProtectedRoute;
