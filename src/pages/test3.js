import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import GoBack from "../components/goBack"
import styled from "styled-components"
import ShareSocial from '../components/share' 
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Seo } from "../components/seo"
import { RiSendPlane2Line } from "react-icons/ri"
// import CasePanels from "../components/casepanels"
import Audio from '../../static/assets/bensound-betterdays.mp3'
import Creepers from "../../static/assets/nebula.svg"
import ScrollAnimation from 'react-animate-on-scroll'
import GiftShop from "../components/giftshop"
import CommentBox from "../components/commentbox"
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
  <body className="spaceport" />
</Helmet>

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

<ScrollAnimation className="signup" animateIn="bounceInUp" delay={53950} initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'10vw', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', borderRadius:'12px'}}>


  <GiftShop />
</ScrollAnimation>
<div className="audio">
  <strong>FULL Experience:</strong> &nbsp; <audio controls="controls" autoplay="true" src={Audio} style={{}}> 
    Your browser does not support the HTML5 Audio element.
</audio>
</div>
<Creepers className="creeper" style={{zIndex:'-1', backgroundSize:'cover', width:'100vw',}} />


       </div>

    
       <div className="outerpanel" style={{borderLeft:'none', padding:'2rem 12%'}}>

<span className="headline">Alien Egg Farm</span>

<h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Alien Egg Farm</h2>

<p className="letter">Possibly one of the most far-out locations I've ever been to. The Bisti Badlands are on tribal land and extremely remote. There are no roads. This is a 3.5 mile hike into some of the most extreme landscapes.
</p>

<p className="letter">It seems like around every corner there is another scene that appears to be from a distant planet. These "alien eggs" are actually weathered limestone.</p>




<p className="letter">Single Shot - No PS - long exposure</p>

          
          

 <div style={{position:'relative', zIndex:'0', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>




<StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="" />
 {/* <a href="https://foundation.app/@twilightscapes/alien-egg-farm-51678" target="_blank" rel="noopener noreferrer nofollow">
</a> */}

</div>

{/* <div className="spacer66" style={{height:'2vh'}} /> */}


          



<div style={{textAlign:'center', padding:'0', margin:'10px 0 1rem 0'}}>
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
  </div>


        </div>
        
        

    {/* <StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="pop" /> */}



       {/* <br /><br />
 <ShareSocial /> */}
<br /><br /><br />

<div style={{textAlign:'center', fontSize:'2rem', padding:'0', margin:'10px 0 1rem 0'}}>WANT THE PHOTO? <br /> TWILIGHTCAPES ARE ONLY $29</div>

<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
<br /><br />


<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
    </div>
    
       </Layout>
     </CustomBox>
     </>

  )
}
