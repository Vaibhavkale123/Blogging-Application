import { Children, createContext, useContext, useState } from "react";


 export const AuthContext=createContext();

 export default function AuthProvider({children}){
    const [username,setUsername]= useState("Vaibhav") 
    const[isAuthenticated, setAuthenticated]=useState(false);

    return(
        <AuthContext.Provider value={{username,setUsername,isAuthenticated,setAuthenticated}} >
        {children}
        </AuthContext.Provider>
    )
 }
