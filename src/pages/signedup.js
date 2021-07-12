import * as React from "react"
import { Layout } from "../components/layout"



import { Link } from "gatsby"
import { RiArrowLeftSLine } from "react-icons/ri"
import { AiTwotoneCamera } from "react-icons/ai"











export default function SignedUpPage({}) {
   return (


    
    <Layout className="thanks-page">


 


<div
      className="wrapper"
      style={{
        textAlign: "center",
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        width:'60%',
        margin:'0 auto',
      }}
    >
      <AiTwotoneCamera
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
          margin:'0 auto',
          textAlign:'center'
        }}
      />
      <h1>Thanks!</h1>
      <p>Thank you for joining the newsletter!</p>
      <Link to="/" className="buttonMore">
        <RiArrowLeftSLine className="icon -left" />
        Lets go back to Homepage
      </Link>
    </div>
    
    
    </Layout>

  )
}
