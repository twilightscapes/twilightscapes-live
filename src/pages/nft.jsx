import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
// import { Helmet } from "react-helmet"
import { RiSendPlane2Line } from "react-icons/ri"
import { IoLogoVercel } from "react-icons/io5"
import { BsCircleFill } from "react-icons/bs"
import { FaSquareFull } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import ShareSocial from '../components/share' 
import { FaHandPointDown } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
import CommentBox from "../components/commentbox"
import CasePanels from "../components/casepanels"

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


a:after{display:none !important;}


.intro:before{
	content: "Twilightscapes NFTs";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}




.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:8vh;}
.spacer66{height:33vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


// body.light .speech p span{color:#fff;}





@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.intro:before{font-size:200%;}

}

@media (min-width: 58rem) {
	.outer{padding:0 10% !important; /* width:50%; */}
	.split1{border:2px solid red !important}
	}


       

`






export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "limited-edition-nft-kits" }) {
      products {
        ...ProductCard
      }
    }
  }






`

       // export default function nftPage({ data: { products } }) {
              export default function nftPage({ data }) {

  return (
<>





<CustomBox>

    <Layout className="nft-page" style={{position:'relative'}}>

    
    <Seo
          title={`NFT Collectible Photography`}
          description={`Twilightscapes NFTs - NFT Art photography for collectors`}
          image={'https://twilightscapes.com/nft-promo.jpg'}
        />





<CasePanels />
 



  



    <section className="nft" style={{paddingTop:'0', overflow:'', margin:'1vh', background:''}}>
    

    


   
    <div className="" style={{background:'', padding:'1vh 12% 0 12%', textAlign:'left'}}>

           <h1 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)'}}>NFT Collectible Photography</h1>
          

<p style={{textAlign:'center', margin:'0 12%'}}>
The Non Fungible Token or NFT, stores proof of identity and ownership of art on the blockchain where it's impossible to be forged, stolen or copied.
</p>

<p style={{textAlign:'center', fontSize:'100%', fontWeight:'bold', marginTop:'10px'}}>Twilightscapes offers a Limited Edition of rare NFTs.</p>

<p style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#FA02B7'}}>Follow Me Into The Night </p>

<p style={{textAlign:'center', fontSize:'140%', marginTop:''}}>An introduction to the work of Todd Lambert</p>

<p style={{textAlign:'center', fontSize:'100%',}}>Genesis Series presented <br />  exclusively on Foundation
<span style={{fontSize:'40px', display:'flex', justifyContent:'center', gap:'3px', marginTop:'10px'}}><IoLogoVercel /><BsCircleFill style={{marginLeft:'-6px', fontSize:'36px'}} /><FaSquareFull style={{marginLeft:'2px', fontSize:'36px'}} /></span>


</p>


<br /><br />
<p style={{textAlign:'center', fontSize:'100%', fontWeight:'bold', maxWidth:'700px', margin:'0 auto'}}>
       winning bids will receive a special NFT package including: behind the scene information, a certificate of authenticity and a limited edition signed print.<br />
       <br />
       Original source RAW file included.<br />The image will also be taken out of future commissions and retired.
</p>


    </div>
       


    
      <ShareSocial />
       
       
       
 {/* <ScrollAnimation animateIn="bounceInUp"  animateOnce={true} delay={100} style={{position:'relative', height:'100%', border:'0px dotted #000', marginTop:'4rem', paddingTop:'1rem', background:''}}>


<div className="home-banner flexbutt" style={{position:'relative', height:'100%', overflow:'', margin:'1rem 3%'}}>


<div className="flexcheek" style={{position:'relative', overflow:'', width:'75vw'}}>

<div className=""  style={{zIndex:'-1', width:'', height:'100%'}}> <a href="https://foundation.app/@twilightscapes/stellar-sentries-51674" target="_blank" rel="noopener noreferrer nofollow">
<StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="featured-image" /></a>
</div>
</div>


<div className="flexcheek" style={{padding:'1vh 3% 0 3%', color:'inherit !important'}}>
       <h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Stellar Sentries</h2>

<p>A very rare night photo of the Very Large Array (VLA). I'd always been intrigued by this place and I'd wanted to visit it. These towers are like nimble giants, constantly twitching and positioning and working tirelessly throughout the night.</p>

<p>After having obtained special permission to be on the premises after dark by way of a favor, I was able to get the perfect lineup framed and then waited for the skies to darken and the stars to come out.</p>

<p>Single Shot - No PS - lightpainted long exposure</p>




      <a
              className="actionJackson"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              href="https://foundation.app/@twilightscapes/stellar-sentries-51674"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>

            <a
              className="moreButton"
               style={{
                cursor:'pointer',
                textAlign:'center',
                margin:'2rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',

              }}
              href="https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=51674" target="_blank" rel="noopener noreferrer"
            >
              View token on Etherscan {" "}
            </a>


</div>



</div>

</ScrollAnimation>



<ScrollAnimation animateIn="bounceInUp"  animateOnce={true} delay={100} style={{position:'relative', height:'100%', border:'0px dotted #000', marginTop:'2rem', paddingTop:'1rem', background:''}}>


<div className="home-banner flexbutt" style={{position:'relative', height:'100%', overflow:'', margin:'1rem 3%'}}>


<div className="flexcheek" style={{position:'relative', overflow:'', width:'75vw'}}>

<div className=""  style={{zIndex:'-1', width:'', height:'100%'}}>
<a href="https://foundation.app/@twilightscapes/alien-egg-farm-51678" target="_blank" rel="noopener noreferrer nofollow"><StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="featured-image " /></a>
</div>

</div>


<div className="flexcheek" style={{padding:'1vh 3% 0 3%',}}>
       <h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Alien Egg Farm</h2>
       
<p>Possibly one of the most far-out locations I've ever been to. The Bisti Badlands are on tribal land and extremely remote. There are no roads. This is a 3.5 mile hike into some of the most extreme landscapes.
</p>

<p>It seems like around every corner there is another scene that appears to be from a distant planet. These "alien eggs" are actually weathered limestone.</p>




<p>Single Shot - No PS - long exposure</p>



      <a
              className="actionJackson"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              href="https://foundation.app/@twilightscapes/alien-egg-farm-51678"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>
            <a
              className="moreButton"
               style={{
                cursor:'pointer',
                textAlign:'center',
                margin:'2rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',

              }}
              href="https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=51678" target="_blank" rel="noopener noreferrer"
            >
              View token on Etherscan {" "}
            </a>
</div>

</div>

</ScrollAnimation>



<ScrollAnimation animateIn="bounceInUp"  animateOnce={true} delay={100} style={{position:'relative', height:'100%', border:'0px dotted #000', marginTop:'2rem', paddingTop:'1rem', background:''}}>


<div className="home-banner flexbutt" style={{position:'relative', height:'100%', overflow:'', margin:'1rem 3%'}}>

<div className="flexcheek" style={{position:'relative', overflow:'', width:'75vw'}}>

<div className=""  style={{zIndex:'-1', width:'', height:'100%'}}>
<a href="https://foundation.app/@twilightscapes/boatswain-s-blunder-51680" target="_blank" rel="noopener noreferrer nofollow"><StaticImage src="../img/gallery2/night282.jpg" alt="Twilightscapes" className="featured-image " /></a>
</div>

</div>


<div className="flexcheek" style={{padding:'1vh 3% 0 3%', maxWidth:''}}>

<h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Boatswain's Blunder</h2>

<p>Confinement, a bode of misery with blue majesty abound.</p>

<p>The petty officer, Mr. Transcontinental promised treasures never found.</p>

<p>Recognized with nothing but obscurity for the sea is sole judge and jury.</p>

<p>Crashing thunderstorms are the only sound where lonesomeness becomes friend and death is crowned.</p>

<p>Thoughts of liberation are constant wonder. from mast to keel and gunwale, this swoon of a boatswain’s blunder.</p>

<p>-- by Todd Lambert</p>

<a
              className="actionJackson"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              href="https://foundation.app/@twilightscapes/boatswain-s-blunder-51680" target="_blank" rel="noopener noreferrer"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>



            <a
              className="moreButton"
               style={{
                cursor:'pointer',
                textAlign:'center',
                margin:'2rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',

              }}
              href=" https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=51680" target="_blank" rel="noopener noreferrer"
            >
              View token on Etherscan {" "}
            </a>
           


</div>



</div>

</ScrollAnimation> */}
       
       

    </section>
 




    <div className="vidbox" style={{maxHeight:'80vh'}}>
<div className="video-background">
    <div className="video-foreground">
      
      <iframe className="" width="100%" height="350" src="https://www.youtube.com/embed/vWNkRK6-oU4?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=vWNkRK6-oU4" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>
</div>







 <br /> <br />
    <h2 className="title" style={{fontSize:'50px', textAlign:'center'}}>Dropping Soon</h2>
<p style={{textAlign:'center'}}>What's coming up next</p>
<br /><br />



<div className="dropromo" style={{width:'100vw', height:'30vh', overflow:'hidden', position:'relative', }}>
       

<div style={{display:'flex', justifyContent:'center', position:'absolute', top:'0', textAlign:'center', width:'90%', margin:'0 auto'}}>

<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={100} style={{zIndex:'1' }}>
<span className="letter">G</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={200} style={{zIndex:'1' }}>
<span className="letter">a</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={300} style={{zIndex:'1' }}>
<span className="letter">s</span>
</ScrollAnimation>

<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={400} style={{zIndex:'1', marginLeft:'2rem' }}>
<span className="letter">S</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={500} style={{zIndex:'1' }}>
<span className="letter">t</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={600} style={{zIndex:'1' }}>
<span className="letter">a</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={700} style={{zIndex:'1' }}>
<span className="letter">t</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={800} style={{zIndex:'1' }}>
<span className="letter">i</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOncTe={true} delay={900} style={{zIndex:'1' }}>
<span className="letter">o</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOncTe={true} delay={1000} style={{zIndex:'1' }}>
<span className="letter">n</span>
</ScrollAnimation>
<ScrollAnimation animateIn="jackInTheBox"  animateOnce={true} delay={1100} style={{zIndex:'1' }}>
<span className="letter">s</span>
</ScrollAnimation>

</div>

<ScrollAnimation animateIn="fadeIn"  animateOnce={true} delay={2000} style={{zIndex:'1', position:'absolute', bottom:'10px', width:'100%', margin:'0 auto' }}>
<div style={{textAlign:'center', fontSize:'140%',}}>coming soon</div>
</ScrollAnimation>




<div className="" style={{zIndex:'',}}>
<StaticImage src="../img/gas-header.jpg" alt="Twilightscapes" className="featured-image" />
</div>

</div>




<br />
<br />


<br />

<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
  

<br />
<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
<CommentBox />
</div>
<br />



<h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Don't see the twilightscape you're looking for?</h3>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>


    </Layout>
     </CustomBox>
     </>

  )
}