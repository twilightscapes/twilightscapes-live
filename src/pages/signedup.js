import * as React from "react"
import { Layout } from "../components/layout"



import { Link } from "gatsby"
import { RiArrowLeftSLine } from "react-icons/ri"
import { AiTwotoneCamera } from "react-icons/ai"











export default function SignedUpPage() {
   return (


    
    <Layout className="thanks-page">


 


<div
      className="wrapper"
      style={{
        textAlign: "center",
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        width:'80%',
        margin:'0 auto',
      }}
    ><div className="spacer33"></div> 
      <AiTwotoneCamera
        style={{
          fontSize: "150px",
          color: "var(--primary-color)",
          margin:'0 auto',
          textAlign:'center'
        }}
      />
      <h1 className="neonText" style={{fontSize:'200%'}}>Thank you for joining the newsletter!</h1>
   

      <div className="spacer33"></div> 
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Lets go back to Homepage
      </Link>
    </div>
    <div className="spacer33"></div> 

 
    
    
    </Layout>

  )
}
