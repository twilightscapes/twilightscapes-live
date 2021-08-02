import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"

import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
// import CasePanels from "../components/casepanels"

import Creepers from "../../static/assets/nebula.svg"








export default function test3Page() {
   return (


    
    <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />



{/* <CasePanels /> */}

      <div className="" style={{padding: '0'}}>

   {/* <ShootinStars style={{zIndex:'0', width:'100vw', height:'100vh', position:'absolute', top:'0', left:'0', right:'0',backgroundSize:'cover', border:'0px solid red'}} /> */}


      
  {/* <StaticImage style={{zIndex:'-1', backgroundSize:'cover', width:'100vw', height:'100vh'}} className="" src="../img/favorites/night294.jpg" alt="Colorado at night with Twilightscapes">
  </StaticImage> */}

<Creepers style={{zIndex:'-1', backgroundSize:'cover', width:'100vw', height:'100vh'}} />


       </div>

    
    
    </Layout>

  )
}
