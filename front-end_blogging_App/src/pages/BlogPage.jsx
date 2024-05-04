import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import blogImg from '../images/ross-findon-mG28olYFgHI-unsplash.jpg'
import { useParams } from "react-router-dom";
import FooterComponent from '../component/FooterComponent';

// const BlogPage = ({ blogs }) => {
export default function BlogPage() {
const {id}  = useParams();
const[loading, setLoading]=useState(false);
    console.log(id)
    const[item,setItem]=useState()
    async function retrivedata(){
    await axios.get(`http://localhost:8080/api/blog/${id}`).then(
        res => {
          const data=res.data;
          setItem(data)
          setLoading(true)
          console.log("res called")
        }
      ).catch(error => {
        console.log(error);
      })}

      retrivedata();
    return (
        <>
        <h1>{loading && item.title}</h1> 
        <Container>
        {loading &&
     
      item.content.split('\n').map((paragraph, i) => (
        <p key={i} style={{textAlign:'left'}}>{paragraph}</p>
    ))}
       
        </Container>
        <FooterComponent />

        </>
        
    );


    
    
}
