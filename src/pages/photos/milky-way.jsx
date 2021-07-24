import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import GoBack from "../../components/goBack"
import CommentBox from "../../components/commentbox"
// import { Helmet } from "react-helmet"
// import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
// import { IoLogoVercel } from "react-icons/io5"
// import { BsCircleFill } from "react-icons/bs"
// import { FaSquareFull } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
import { FiZoomIn } from 'react-icons/fi'
import GalleryMenu from "../../components/galleryMenu"
import { FaHandPointDown } from "react-icons/fa"
import ShareSocial from '../../components/share' 

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

img{cursor:zoom-in}


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
    

   {/* <div className="zoomer" style={{zIndex:'1', position:'fixed', display:'flex', justifyContent:'center', width:'100vw'}}>
    <span style={{display:'flex',alignItems:'center', justifyContent:'center', position:'fixed', bottom:'50px', zIndex:'1', textAlign:'center', color:'#fff', fontSize:'100%', fontFamily:'Hammersmith One', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', }}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</span>
</div> */}

    <div className="vidbox" style={{position:'relative', maxHeight:'80vh'}}>

    <ScrollAnimation animateIn="bounceInDown" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={0} style={{position:'absolute', zIndex:'1', top:'100px',  fontSize:'10vw', color:'white', display:'flex', justifyContent:'center', alignItems:'center', border:'0px solid blue', width:'100vw'}}>
      <div className="txtshadow-header letter zoomer">Milky Way
    </div>
</ScrollAnimation>

<div className="video-background">
    <div className="video-foreground">
      <iframe title="Twilightscapes Video" className="" src="https://www.youtube.com/embed/fm-rOnGIIaE?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=fm-rOnGIIaE" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>


</div>
<GoBack />

    {/* <div id="vidtop-content">
<div className="vid-info">
	  <strong>Meet Todd</strong>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of</p>
  </div>
</div> */}
 

 
<div style={{position:'', zIndex:'', width:'90%', display:'flex', justifyContent:'center', padding:'1rem 3%', gap:'30px'}}>

  {/* <p>The Milky Way is a barred spiral galaxy. All the stars we see in the night sky are in our own Milky Way Galaxy. Earth is aproximately 25,000 light years from the center and the distance from one side of the Milky Way to the other, is a whopping 100,000 light years. </p>

  <p>While nobody knows the true number, it is believed that the Milky Way consists of over a 100 billion stars!  </p>

  <p>Just as the Earth goes around the Sun, the Sun goes around the center of the Milky Way. It takes 250 million years for our Sun and the solar system to go all the way around the center of the Milky Way.</p> */}
</div>



<GalleryMenu />

<br /><br />
 <ShareSocial />
<br /><br /><br />
<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
<br /><br />

<GalleryMenu />

<br /><br />
<GoBack />

<blockquote style={{fontSize:'200%', padding:'1rem 8%', borderRadius:'12px', width:'60%', margin:'3rem auto 1rem auto', padding:'0 8%', textAlign:'center'}}>Do you like the Milky Way as much as I do? I'd love to hear ahout it. </blockquote>


<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>



<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
    </div>


    
    </Layout>
     </CustomBox>
     </>

  )
}