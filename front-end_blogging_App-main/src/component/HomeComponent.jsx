// import React from 'react';
import Container from 'react-bootstrap/Container';

import axios from 'axios';
import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import { Col } from "react-bootstrap";
import blogImage from '../images/blog.jpg';
import FooterComponent from './FooterComponent';

import { Link } from "react-router-dom";



export default function HomeComponent() {
  const [listItms,setList]=useState([]);
  useEffect(()=>{
    // dummy url:https://fakestoreapi.com/products
    axios.get('http://localhost:8080/api/blog').then(
      res => {
        const data=res.data;
        setList(data)
        console.log("res called")
      }
    ).catch(error => {
      console.log(error);
    });
  }
    ,[])
 
  
  
   return (
    <>
      <Container >
<Row className=" g-3 ">
  {listItms.map((item) => (
    <Link to={`/post/${item.id}`}>
   
  <Col >
<Card className="mt-3"  style={{ width: '80rem',display: 'flex', flexDirection: 'row' }}>

  <Card.Img variant="left" src={blogImage} rounded style={{ width:'283px', height:'166px'}}/>
  {/* <Image src={blogImage}  alt="Blog Post" rounded float-left  style={{objectFit: "cover", width:'300px', height:'200px'}} /> */}
  
  <Card.Body style={{maxWidth: '60%', maxHeight:'250px'}} >

    <Card.Title>{item.title}</Card.Title>

    <Card.Text className="text-right">

      {item.content.substring(0,500)}...

    </Card.Text>

  </Card.Body>

</Card>
  </Col>
  </Link>

)).reverse()}

  
 </Row>


</Container>
<FooterComponent/>

</>

  )

}
