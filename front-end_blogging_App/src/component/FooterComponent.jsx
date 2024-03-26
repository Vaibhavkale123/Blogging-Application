import { Container } from 'react-bootstrap'
import '../css/home.css'


export default function FooterComponent(){
    return(
     
<div className=" mt-5 mb-md-0  ">

<footer fixed='bottom' className=" text-white text-center text-lg-start bg-dark ">
 
  <div className="container p-3" >
   
    <div class="row mt-4">
     
      <div class="col-4 col-md-12 ">
        <h5 class="text-uppercase mb-4 text-center">About company</h5>

        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas iusto, labore dolores officiis suscipit aspernatur doloremque eius a
         utem fuga magnam et voluptate culpa ex deleniti saepe nam ab inventore.
        </p>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas iusto, labore dolores officiis suscipit aspernatur doloremque eius a
         utem fuga magnam et voluptate culpa ex deleniti saepe nam ab inventore.
        </p>
      </div>
     
    </div>
   
  </div>
  <div className="text-center p-3" style={{backgroundColor: 'black'}}>
    © 2024 Copyright:
    <a className="text-white" >MyBlog</a>
  </div>
</footer>
</div>



     

    )
}