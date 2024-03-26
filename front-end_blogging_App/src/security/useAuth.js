

import { useState, createContext } from "react";


const UserContext = createContext()



function useAuth() {
    
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [useremail, setEmail] = useState(null)
    const [password, setPassword] = useState(null)




    // return (
    //   <UserContext.Provider value={user}>
    //     <h1>{`Hello ${user}!`}</h1>
    //     <Component2 user={user} />
    //   </UserContext.Provider>
    // );
  }
  
  function login(){
 if(username=='admin' && password==="pass"){
    setAuthenticated(true);
    return true
 }
else 
return false

}