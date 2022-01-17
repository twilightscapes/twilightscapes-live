import * as React from "react"
import { Layout } from "../components/layout"


import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"











export default function CustomerPage() {
   return (


    
    <Layout className="thanks-page">


 
    
    <div className="container" style={{padding:'0 12%'}}>
       
    <h1 className="title" style={{fontSize:'40px'}}>You're in the cool club, now...</h1>

    
    <div className="content">
    
    <p>Thank you so much for your purchase of a Twilightcapes. You are helping to support an individual artist and encouraging me to keep shooting. People like you make that possible.</p>

    <p>Thank You!</p>
    
  

    <StaticImage src="../img/toddlambert.jpg" alt="Todd Travels" />
    <br />
     <p>If you should ever have any questions or concerns, please feel free to drop me a line anytime.</p>

     <p style={{textAlign:'center'}}><Link className="moreButton" to="/contact/" state={{modal: true}} >Contact Todd Now</Link></p>



       </div>
    
       </div>
       <div className="spacer33"></div> 
    
    </Layout>

  )
}
