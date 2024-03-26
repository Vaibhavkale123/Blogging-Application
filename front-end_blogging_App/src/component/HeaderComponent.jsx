import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../security/AuthContext';

export default function HeaderComponent(){
  const authContext=useContext(AuthContext)  

  console.log("from header"+authContext.isAuthenticated)
  // authContext.setUsername("Mic")

  return(
    
        <Navbar expand="lg" className="bg-body-tertiary mb-4"  data-bs-theme="dark">
        <Container>
          <Link className='navbar-brand' to="/">My blog site</Link>
          
        
            <Nav className="me-auto">
           
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
               </Nav>
            <Nav className='me-1'>
          {!authContext.isAuthenticated &&  <Link className='nav-link' to='/login'>Login</Link> }
          {authContext.isAuthenticated &&  <Link className='nav-link'  to='/add '>Add Post</Link>}
          {authContext.isAuthenticated &&  <Link className='nav-link'  to='/logout '>Logout</Link>}
          {authContext.isAuthenticated &&  <Link className='nav-link' to='#'> {authContext.username} </Link> }
            </Nav>

          
        </Container>
      </Navbar>

    )
}