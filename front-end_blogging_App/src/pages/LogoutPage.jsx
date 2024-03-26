import { useContext } from "react"
import { AuthContext } from "../security/AuthContext"
import FooterComponent from "../component/FooterComponent"

export default function LogoutPage() {
  const authContext=useContext(AuthContext)  
      authContext.setAuthenticated(false)
     
    return (
        <>
        <div >
            <h1>You are logged out!</h1>
            <div>
                See you again...

            </div>

        </div>
        
        <div className="fixed-bottom">
<FooterComponent />
</div>

        </>
    )
}
