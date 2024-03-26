import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { wait } from '@testing-library/user-event/dist/utils';

export default function  RegisterPage() {

  const [email, setEmail] = useState("")

  const [password,setPassword] =useState();
  const [role,setRole] =useState("user");
 const[showSuccess,setSuccess]=useState(false );
//  const [isLoading, setIsLoading] = useState(false); // Added state for loading
const isLoading=false;
const newUserHandler=async(e)=>{
    // setIsLoading(true)
  // dummy url:https://fakestoreapi.com/products
  console.log("start calling");
  axios.post('http://localhost:8080/api/user',{
  name: email ,
  password: password, 
  role: role
  }).then(
    res => {
      setSuccess(true);
      // setIsLoading(false)
    }
  ).catch(error => {
    console.log(error);
  });
  console.log("call completed");
e.preventDefault()
}
  return (
    
   <Container>
   <h2 className='h2 mb-4'>Register Page</h2>
    <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
       
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" onChange={(p)=> setPassword(p.target.value)} />
     </Form.Group>


     <Button variant="primary"  type="submit" onClick= {newUserHandler} >
       Submit
     </Button>

   </Form>

  {showSuccess && <span>Registred Successfully</span>}

  </Container>

    
  );

 
  }  


