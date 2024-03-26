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
        <Container>
            <Row>
              
             { loading && 
                <Card>
                    {/* <Card.Img variant="top" className='img-fluid img-cover img-thumbnail'  src={blogImg} /> */}
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.content}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit ligula, maximus id eleifend vel, ornare in lectus. Aliquam neque ante, dapibus vel ex in, tristique euismod nisl. Cras vel urna sit amet turpis volutpat pellentesque. Nullam ligula mi, maximus a nunc non, pharetra volutpat massa. In eu tempor felis, vel vulputate libero. Phasellus laoreet metus at lacus egestas, sed placerat urna dignissim. Nam sed tortor eu leo laoreet ultrices. Morbi laoreet vel nisl in blandit. Fusce nec ultricies ipsum. Curabitur in euismod ex, vel posuere tortor. Suspendisse molestie at nisi sed tempus. Aenean at finibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vitae lacus nec nulla cursus placerat. Sed tincidunt quam vitae magna dictum, in sagittis tortor pellentesque.

                            Aliquam ipsum urna, vehicula quis urna id, mollis consectetur elit. Maecenas sit amet justo eget sem auctor tincidunt id ut quam. Sed id odio in lectus sodales gravida et ac mi. Nunc erat mi, vulputate et vulputate eu, ullamcorper non mi. Integer in ex eu est maximus vehicula vitae ac enim. Phasellus dui ligula, pharetra ac vehicula at, malesuada ornare nisl. Fusce quis sapien in elit tincidunt luctus sed et nisl. Suspendisse potenti. Maecenas tempor posuere nunc eget imperdiet.

                            Nulla a sodales urna, nec auctor sapien. Nulla auctor, leo in sodales commodo, augue augue posuere odio, non vestibulum tortor mi eget massa. Quisque vitae tempus lorem, nec accumsan lorem. Proin tempus ipsum bibendum nulla gravida dignissim. Sed hendrerit nulla et purus rhoncus laoreet. Maecenas congue pellentesque scelerisque. Morbi ac ligula turpis. Quisque metus arcu, congue eu mattis quis, finibus et sapien. Mauris id est purus. Ut cursus nibh a metus maximus, at elementum augue efficitur. Ut nulla sem, faucibus nec facilisis et, interdum consequat magna. Vestibulum sit amet pellentesque nisl. Pellentesque in egestas lacus. Mauris fringilla, lacus at semper bibendum, urna augue facilisis nisi, a dictum lorem eros scelerisque nisi. Morbi ut lorem tortor. Etiam viverra, sapien in mollis rhoncus, diam erat varius metus, non vehicula eros orci quis sem.

                            Quisque rhoncus nec sem vitae auctor. Morbi lacinia odio non condimentum gravida. Nullam magna ipsu */}
                        </Card.Text>


                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
}
          
        </Row>
        </Container >

        {/* <div className="fixed-bottom">
<FooterComponent/>

</div> */}

        <FooterComponent />
        </>
        
    );


    
    // <h1>{id}</h1>

}
