import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"
// import CasePanels from "../components/casepanels"

import Creepers from "../../static/assets/nebula.svg"
import ScrollAnimation from 'react-animate-on-scroll'
import Newsignup from "../components/newssign"

const CustomBox = styled.div`
.slider{object-fit: scale-down;}

// div:first-of-type{padding:0 !important; margin:0 !important;}

@media (max-width: 48em) {
	// .image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	// .image-wrap .news-btn{ margin-top:1rem;}
	// .image-wrap .innerpanel{font-size:70% !important;}
  // .signup{ bottom:150px;}





}

@media (min-width: 58em) {
	// .textbox{padding-top: !important;}
  // .signup{ bottom:250px;}
}


`



export default function test3Page() {
   return (


    <CustomBox style={{}}>
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

{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={3950} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'10vw', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', borderRadius:'12px'}}>


  <Newsignup />
</ScrollAnimation> */}

<Creepers className="creeper" style={{zIndex:'-1', backgroundSize:'cover', width:'100vw',}} />


       </div>

    
    
    </Layout>
</CustomBox>
  )
}
