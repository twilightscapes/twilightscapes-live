import * as React from "react"
import { Layout } from "../components/layout"
import Image from '../components/Image'
import { RiSendPlane2Line } from "react-icons/ri"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"












export default function SignedUpPage({}) {
   return (


    
    <Layout className="thanks-page">


 

    
<div
      className="wrapper"
      style={{
        textAlign: "center",
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Got your message</h1>
      <p>Thank you for getting in touch us. We will get back to you shortly.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Lets go back to Homepage
      </Link>
    </div>
    
    
    </Layout>

  )
}
