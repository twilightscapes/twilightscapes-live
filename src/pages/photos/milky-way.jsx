import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import GoBack from "../../components/goBack"
// import { Helmet } from "react-helmet"
// import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
// import { IoLogoVercel } from "react-icons/io5"
// import { BsCircleFill } from "react-icons/bs"
// import { FaSquareFull } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'

// import { MoreButton } from "../components/more-button"
// import { title } from "../pages/index.module.css"



// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "./index.module.css"



// import { GiPlainArrow } from 'react-icons/gi'

import styled from 'styled-components'

const CustomBox = styled.div`




@media (min-width: 58rem) {

	}


       

`






export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "milky-way" }) {
      products {
        ...ProductCard
      }
    }
  }
`

       // export default function nftPage({ data: { products } }) {
              export default function milkywayPage({ data }) {
                

  return (
<>







<CustomBox>

    <Layout className="milkway-page" style={{position:''}}>
    <Seo
          title={`The glory of the Milky Way`}
          description={`Photos of the Milky Way`}
          image={'https://twilightscapes.com/default-photo-milky-way.jpg'}
        />
    

   

    <div className="vidbox" style={{position:'relative'}}>

    <ScrollAnimation animateIn="bounceInDown" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={0} style={{position:'absolute', zIndex:'1', top:'100px',  fontSize:'10vw', color:'white', display:'flex', justifyContent:'center', alignItems:'center', border:'0px solid blue', width:'100vw'}}>
      <div className="txtshadow-header letter">Milky Way
    </div>
</ScrollAnimation>

<div className="video-background">
    <div className="video-foreground">
      <iframe title="Twilightscapes Video" className="" src="https://www.youtube.com/embed/fm-rOnGIIaE?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=fm-rOnGIIaE" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>


</div>


    {/* <div id="vidtop-content">
<div className="vid-info">
	  <strong>Meet Todd</strong>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of</p>
  </div>
</div> */}
 

 
{/* <div style={{position:'', zIndex:'', width:'90%', display:'flex', justifyContent:'center', padding:'1rem 3%', gap:'30px'}}>

  <p>The Milky Way is a barred spiral galaxy. All the stars we see in the night sky are in our own Milky Way Galaxy. Earth is aproximately 25,000 light years from the center and the distance from one side of the Milky Way to the other, is a whopping 100,000 light years. </p>

  <p>While nobody knows the true number, it is believed that the Milky Way consists of over a 100 billion stars!  </p>

  <p>Just as the Earth goes around the Sun, the Sun goes around the center of the Milky Way. It takes 250 million years for our Sun and the solar system to go all the way around the center of the Milky Way.</p>
</div> */}





<br />
<br />



<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>

<GoBack />
    
    </Layout>
     </CustomBox>
     </>

  )
}