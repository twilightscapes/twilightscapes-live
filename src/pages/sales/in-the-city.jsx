import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
// import { FiZoomIn } from 'react-icons/fi'
import { Seo } from "../../components/seo"
import GoBack from "../../components/goBack"
import GalleryMenu from "../../components/galleryMenu"
import CommentBox from "../../components/commentbox"
import ShareSocial from '../../components/share' 
import ReactPlayer from 'react-player/lazy'
// import { ImPlay } from "react-icons/im"
// import { Helmet } from "react-helmet"
// import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
// import { IoLogoVercel } from "react-icons/io5"
// import { BsCircleFill } from "react-icons/bs"
// import { FaSquareFull } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
import { FaHandPointDown } from "react-icons/fa"
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


img{cursor:zoom-in;}

@media (min-width: 58rem) {

	}


       

`






export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "in-the-city" }) {
      products {
        ...ProductCard
      }
    }
  }
`

       // export default function nftPage({ data: { products } }) {
              export default function inthecityPage({ data }) {
                

  return (
<>







<CustomBox>

    <Layout className="gasstations-page" style={{position:''}}>
    <Seo
          title={`Livin For The City`}
          description={`Photos of night scenes in and around town`}
          image={'https://twilightscapes.com/default-photo-city.jpg'}
        />
    
   
    
{/* <div className="zoomer" style={{zIndex:'1', position:'fixed', display:'flex', justifyContent:'center', width:'100vw'}}>
    <span style={{display:'flex',alignItems:'center', justifyContent:'center', position:'fixed', bottom:'50px', zIndex:'1', textAlign:'center', color:'#fff', fontSize:'100%', fontFamily:'Hammersmith One', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', }}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</span>
</div> */}

<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>

    <ScrollAnimation animateIn="bounceInDown" animateOut="" initiallyVisible={false} animateOnce={false} animatePreScroll={true} delay={0} style={{position:'absolute', zIndex:'1', top:'100px',  fontSize:'10vw', color:'white', display:'flex', justifyContent:'center', alignItems:'center', border:'0px solid blue', width:'100vw'}}>
      <div className="txtshadow-header letter zoomer">In the City
    </div>
</ScrollAnimation>

<ReactPlayer
          className='react-player'
          url="https://www.youtube.com/embed/nKi6zsb1L1A?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=nKi6zsb1L1A"
          width="100%"
          height="100%"
     
 
          autoplay={true}
          background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
        //   playIcon={
        //     <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'10%'}}>
              
      
      
      
        // <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
        //   <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
        //   <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
          
        //   </div>
        //   </button>}
      
      
      
        //     light="../assets/transparent.png"
          />


{/* <div className="video-background">
    <div className="video-foreground">
      <iframe title="Twilightscapes Video" className="" src="https://www.youtube.com/embed/nKi6zsb1L1A?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=nKi6zsb1L1A" frameBorder="0" allowFullScreen></iframe>
    </div>
</div> */}


</div>






    {/* <div id="vidtop-content">
<div className="vid-info">
	  <strong>Meet Todd</strong>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of</p>
  </div>
</div> */}
 
 {/* <GoBack /> */}
 

<br />
<br />

<GalleryMenu />

 <br /><br />
 {/* <ShareSocial />
<br /><br /><br /> */}






<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
<br /><br />

<GalleryMenu />

<br /><br />
 <ShareSocial />
<br />



<br /><br />
<GoBack />



<blockquote style={{fontSize:'200%', borderRadius:'12px', width:'100%', margin:'3rem auto 1rem auto', padding:'0 8%', textAlign:'center'}}>Cities are always fascinating. <br /> What's your favorite city and why?</blockquote>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'0 auto'}} />
</ScrollAnimation>

<div style={{padding:'2vh 5vw', borderTop:'0px solid', marginTop:'0'}}>
    <CommentBox />
    </div>
    
    </Layout>
     </CustomBox>
     </>

  )
}