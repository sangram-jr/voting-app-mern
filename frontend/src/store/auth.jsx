import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  //const [services,setServices]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const authorizationToken=`Bearer ${token}`;
  //for API
  const API='https://voting-app-mern-3.onrender.com';


    //function to stored the token in local storage
    const storeTokenInLS = (serverToken) => {
      setToken(serverToken);
      return localStorage.setItem("token", serverToken);
    };

  
    // if token is find then it return true , else it return false
    let isLoggedIn = !!token;
    //console.log("token", token);
    //console.log("isLoggedin ", isLoggedIn);

  
    //   remove the token
    const LogoutUser = () => {
      setUser("");
      setToken("");
      return localStorage.removeItem("token");
    };



    //JWT authentication- to get the currently loggedIn user data
    const userAuthentication = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API}/api/auth/user`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
  
          // our main goal is to get the user data 👇
          setUser(data.userData);
          setIsLoading(false);
        } else {
          console.error("Error fetching user data");
         // alert("At First plese login then access it");
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };



    /*to fetch the service data from the database
    const getVoting=async()=>{
        try {
          const response=await fetch(`${API}/api/data/voting`,{
            method:"GET",
          });
          if(response.ok){
            const data=await response.json();
            console.log(data.msg);
            setServices(data.msg);
            
          }
        } catch (error) {
          console.log(error);
          
        }
    }*/
  
    useEffect(() => {
      userAuthentication();
      //getVoting();
    },[] );

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn, 
        storeTokenInLS,
        LogoutUser ,
        user,
        authorizationToken,
        isLoading,
        userAuthentication,
        API
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};