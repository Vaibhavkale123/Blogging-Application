import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import { useState,useContext} from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../security/AuthContext';
import FooterComponent from '../component/FooterComponent';


export default function LoginPage() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [showSuccessMessge, setShowSuccessMessge] = useState(false)
  const [showErrorMessge, setShowErrorMessge] = useState(false)
  const navigate=useNavigate();
  const authContext=useContext(AuthContext)  
  return (
    <>

      <h2 className='h2 mb-4'>Login Page</h2>
      <Container>
        <Form>
          {showSuccessMessge &&<span className='text-color-success d-b'>Authenticated Sucessesfully</span>}
          {showErrorMessge && <span className='text-color-warning d-b'>Authentication failed. Please try again</span>}
          
          <Form.Group className="mb-3 " controlId="formGroupEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={
              (p) => { setPassword(p.target.value) }
            } placeholder="Password" />
            <Button className='' onClick={loginHandler}>Login</Button>
          </Form.Group>
        </Form>


      </Container>
      <span>If you don't have acount <Link to='/register'> click here</Link> </span>
      <FooterComponent/>
    </>
  )
  function loginHandler() {
    // console.log("your password is: " + password + "\n your email:" + email)
    if(email==="admin" && password==="pass"){
      authContext.setAuthenticated(true)
      authContext.setUsername(email)
      console.log("suceess")
      
        
      // authContext.setUsername(email);
      setShowSuccessMessge(true)
      setShowErrorMessge(false)
      navigate("/")

    }
    else{
  // authContext.setAuthenticated(false)
        console.log("fail")
      setShowSuccessMessge(false)
      setShowErrorMessge(true)
  
    } 
  
  }

  function logout(){
  // authContext.setAuthenticated(false)
  navigate("\logout")
  }
  
}


