import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import GoBack from "../../components/goBack"
import styled from "styled-components"
import ShareSocial from '../../components/share' 
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Seo } from "../../components/seo"
import { RiSendPlane2Line } from "react-icons/ri"
// import CasePanels from "../components/casepanels"
// import Audio from '../../../static/assets/bensound-betterdays.mp3'
import Creepers from "../../../static/assets/crude-addiction.svg"
import ScrollAnimation from 'react-animate-on-scroll'
import GiftShop from "../../components/giftshop"
import CommentBox from "../../components/commentbox"
import PhotoMenu from "../../components/animated-photos-menu"
import WormHole from "../../../static/assets/ORBIES.svg"

const CustomBox = styled.div`
.slider{object-fit: scale-down;}

// .audio:before{
//   position:absolute;
//   top:100px;
//   width:200px;
//   content: " Audio Controls: ";
//   display:block  !important;
//   border:0px solid red  !important;

// }
// div:first-of-type{padding:0 !important; margin:0 !important;}

@media (max-width: 48em) {
	// .image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	// .image-wrap .news-btn{ margin-top:1rem;}
	// .image-wrap .innerpanel{font-size:70% !important;}
  // .signup{ bottom:150px;}

  .vidbox{height:50vh !important;}



}

@media (min-width: 58em) {
	// .textbox{padding-top: !important;}
  // .signup{ bottom:250px;}
}


`


export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "feature" }) {
      products {
        ...ProductCard
      }
    }
  }
`

       // export default function nftPage({ data: { products } }) {
              export default function crazygeoPage({ data }) {
                

  return (
<>


    <CustomBox style={{}}>
    <Layout className="thanks-page">
    <Helmet>
  <body className="spaceport2" />
</Helmet>

<Seo
          title={`Interactive Photo Experiences by Todd Lambert`}
          description={`Experiences are a new melding of visual, audio and interactive together in a new medium for art`}
          image={'https://twilightscapes.com/experiences-promo.jpg'}
        />



{/* <CasePanels /> */}

<div className="vidbox" style={{maxHeight:'90vh', overflow:'hidden'}}>

   {/* <ShootinStars style={{zIndex:'0', width:'100vw', height:'100vh', position:'absolute', top:'0', left:'0', right:'0',backgroundSize:'cover', border:'0px solid red'}} /> */}


      
  {/* <StaticImage style={{zIndex:'-1', backgroundSize:'cover', width:'100vw', height:'100vh'}} className="" src="../img/favorites/night294.jpg" alt="Colorado at night with Twilightscapes">
  </StaticImage> */}
<div className="vidbox" style={{maxHeight:'90vh', overflow:'hidden'}}>


<div style={{width:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'1', backgroundSize:'cover'}}><StaticImage src="../img/Wormhole.png" alt="Twilightscapes" className="layer1" /></div>


{/* <WormHole style={{width:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'1', backgroundSize:'cover'}} /> */}


{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={19000} initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'10px',
right:'10vw', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', width:'200px', borderRadius:'12px'}}>
<ScrollAnimation  animateIn="fadeOut" delay={24000} duration="1" initiallyVisible={true} animateOnce={true} animatePreScroll={true} >
  <GiftShop />
  </ScrollAnimation> */}




  <div className="video-background" style={{width:'100vw'}}>
  
  

  <div className="video-foreground" style={{position:'absolute', zIndex:'-1'}}>
    
      <iframe className="" width="100%" height="350" src="https://www.youtube.com/embed/NfEdtor4cis?controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=NfEdtor4cis" frameBorder="0" allowFullScreen playsinline></iframe>
    </div>
  

</div>


{/* <div className="audio">
  <strong>FULL Experience:</strong> &nbsp; <audio controls="controls" autoplay="true" src={Audio} style={{}}> 
    Your browser does not support the HTML5 Audio element.
</audio>
</div> */}


<Creepers className="creeper" style={{zIndex:'-1', backgroundSize:'cover', width:'100vw',}} />


       </div>

    </div>
   
    
       </Layout>
     </CustomBox>
     </>

  )
}
