import React, { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FooterComponent from "../component/FooterComponent";
import axios from "axios";

// import MyImg from "../images/rick-gebhardt-8kfeIa-qaOk-unsplash.jpg"

export default function AddBlog() {
    const [title, setTitle] = useState(null);
    const[content, setContent]=useState()
    const[message, setMessage]=useState()

    // const [error, setError] = useState();
    // const handleFileChange = (f) => {
    //     if (f.target.files[0]) {
    //         setFile(URL.createObjectURL(f.target.files[0]));
    //     }
    // }

    function addData(e){
    e.preventDefault();
     const   data={title:title,content:content,user:{uid:1}};
    const sendData=async (data) =>await axios.post("http://localhost:8080/api/blog",data).then(()=>setMessage("Submitted Successfully")).catch((e)=>setMessage(e))
    sendData(data);
       
}
    return (
        <>
            <Container>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="title" onChange={(t)=>setTitle(t.target.value)} placeholder="Enter your title here" />
                        </Form.Group>
                        {/* <Form.Label>Please select image for your blog</Form.Label>
                        <Form.Control type="file" onChange={
                            f => {
                                setfile(URL.createObjectURL(f.target.files[0]));
        
                                console.log(f.target.value) //it will give name
                            }} /> */}
                    </Form.Group>
                </Form>

                {/* <Image src={file } alt={file} style={{width:'300px',height:'300px'}} /> */}
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Blog Content</Form.Label>
                        <Form.Control as="textarea" required onChange={(c)=>setContent(c.target.value)} rows={12} maxLength={10000} placeholder="Enter your contenet here"style={
                            { maxHeight: 'auto' }
                        } />
                    </Form.Group>

                    <Button variant="primary"  type="submit" onClick={addData}  >
       Submit
     </Button>
                </Form>
                {/* <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {file && <div className='file'>{file.name}</div>}
                </div> */}

{message && <span>{message}</span>}
            </Container>
            <FooterComponent/>
        </>
    )

}