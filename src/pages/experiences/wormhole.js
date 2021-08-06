import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
// import GoBack from "../../components/goBack"
import styled from "styled-components"
import ShareSocial from '../../components/share' 
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Seo } from "../../components/seo"
// import { RiSendPlane2Line } from "react-icons/ri"
import Audio from '../../../static/assets/bensound-betterdays.mp3'
import SVG from "../../../static/assets/crude-addiction.svg"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../../components/giftshop"
import PhotoMenu from "../../components/animated-photos-menu"
import CommentBox from "../../components/commentbox"
const CustomBox = styled.div`

@media (max-width: 48em) {

}

@media (min-width: 58em) {

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
              export default function crudeaddictionPage({ data }) {
                

  return (
<>


    <CustomBox style={{}}>
    <Layout className="thanks-page">
    <Helmet>
  <body className="spaceport1" />
</Helmet>

<Seo
          title={`Wormhole - Animated Photo Experience by Todd Lambert`}
          description={`Experiences are a new melding of visual, audio and interactive together in a new medium for art`}
          image={'https://twilightscapes.com/twilight-promo-wormhole.jpg'}
        />






 


      


{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={18000} duration="5" initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'0', border:'0px solid yellow', justifyContent:'center', width:'100%', textAlign:'center', display:'flex', borderRadius:'12px', justifyContent:'center'}}>


<ScrollAnimation  animateIn="fadeOut" delay={28000} duration="1" initiallyVisible={true} animateOnce={true} animatePreScroll={true} >
  <GiftShop />
</ScrollAnimation>

</ScrollAnimation> */}



<div className="vidbox" style={{maxHeight:'100vh', overflow:'hidden'}}>
  
<div className="video-background" style={{width:'100vw',}}>

  {/* <SVG style={{width:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}} /> */}


<div style={{width:'100%', position:'absolute', bottom:'0', left:'0', right:'0', zIndex:'0', backgroundSize:'cover'}}><StaticImage src="../img/Wormhole.png" alt="Twilightscapes" className="layer1" /></div>



  <div className="video-foreground" style={{position:'absolute', zIndex:'-1'}}>
  <iframe className="" width="100%" height="350" src="https://www.youtube.com/embed/NfEdtor4cis?controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=NfEdtor4cis" frameBorder="0" allowFullScreen playsinline></iframe>
  </div>

  
</div>
{/*  */}
</div>


<div className="audio">
  <strong>FULL Experience:</strong> &nbsp; <audio controls="controls" autoplay="false" src={Audio} style={{}}> 
    Your browser does not support the HTML5 Audio element.
</audio>
</div>


<div className="fluff outerpanel" style={{borderLeft:'none', padding:'2rem 12%'}}>

{/* <span className="">Alien Egg Farm</span>

<h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Alien Egg Farm</h2>

<p className="letter">Possibly one of the most far-out locations I've ever been to. The Bisti Badlands are on tribal land and extremely remote. There are no roads. This is a 3.5 mile hike into some of the most extreme landscapes.
</p>

<p className="letter">It seems like around every corner there is another scene that appears to be from a distant planet. These "alien eggs" are actually weathered limestone.</p>

<p className="letter">Single Shot - No PS - long exposure</p> */}

 {/* <div style={{position:'relative', zIndex:'0', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>
<StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="" />
</div> */}

{/* <div className="spacer66" style={{height:'2vh'}} /> */}

{/* <div style={{textAlign:'center', padding:'0', margin:'10px 0 1rem 0'}}>
  WANT THE NFT? ITS ON FOUNDATION:<br />
<a
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href="https://foundation.app/@twilightscapes/alien-egg-farm-51678"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>
  </div> */}

    {/* <StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="pop" /> */}



 <ShareSocial />
<br /><br /><br />

<div style={{textAlign:'center', fontSize:'2rem', padding:'0', margin:'10px 0 1rem 0'}}>WANT THE PHOTO? <br /> TWILIGHTCAPES ARE ONLY $29</div>

<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
<br /><br />


<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
 </div>
    


</div>
<PhotoMenu />
       </Layout>
     </CustomBox>
     </>

  )
}
