import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
// import { Helmet } from "react-helmet"
// import { RiSendPlane2Line } from "react-icons/ri"
import { IoLogoVercel } from "react-icons/io5"
import { BsCircleFill } from "react-icons/bs"
import { FaSquareFull } from "react-icons/fa"
// import { StaticImage } from "gatsby-plugin-image"
import ShareSocial from '../components/share' 
import { FaHandPointDown } from "react-icons/fa"
import { RiArrowRightSLine } from "react-icons/ri"
import ScrollAnimation from 'react-animate-on-scroll'
import Genesis from '../pages/photos/in-the-city'
import NFTMenu from "../components/nft-menu"
import CommentBox from "../components/commentbox"
// import CasePanels from "../components/casepanels"

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


@keyframes sirens {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

// .intro:before{
// 	content: "Twilightscapes NFTs";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;

// background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
//   background-size: 400% 400%;
//   animation: sirens .5s ease infinite;
// }




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
    shopifyCollection(handle: { eq: "twilightscapes" }) {
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
          image={'https://twilightscapes.com/promo-follow-me-into-night.jpg'}
        />


<section className="nft1" style={{paddingBottom:'1rem', overflow:'', margin:'1vh', background:''}}>

<div className="" style={{background:'', padding:'1vh 8vw 0 8vw', textAlign:'left'}}>

<h1 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)'}}>NFT Collectible Photography</h1>
          

           <h2 style={{textAlign:'center', margin:'0 12%'}}>
                  The Non Fungible Token or NFT, stores proof of identity and ownership of art on the blockchain where it's impossible to be forged, stolen or copied.
                  </h2>
                  
                  <h3 style={{textAlign:'center', fontSize:'100%', fontWeight:'bold', marginTop:'10px'}}>Twilightscapes offers Limited Edition rare NFTs.</h3>

                  </div>
                  </section>




<NFTMenu />





      <section className="nft1" style={{paddingTop:'0', overflow:'', margin:'1vh', background:''}}>

<div className="" style={{background:'', padding:'1vh 8vw 0 8vw', textAlign:'left'}}>











    </div>       

   
    </section>
   




    



<div className="nft">

  
  <ProductListing products={data.shopifyCollection.products} />
</div>
  

<br /><br />

<a aria-label="Link to OpenSea" href="https://opensea.io/collection/twilightscapes"
            className="navbar-item button fire actionJackson"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center'
            }}
            rel="noreferrer" target="_blank">
              This Collection Available on OpenSea 
<span className="icon -right"><RiArrowRightSLine /></span></a>
            
<br />

<div className='NFTiframer-wrapper' style={{position:'relative', top:'0', zIndex:'0', width:'100%', maxWidth:'60vw', maxHeight:'50vh', margin:'0 auto', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)', background:'#fff', borderRadius:'12px' }}>

<iframe title="Twilightscapes on OpenSea" id="youtube2" className="blog-video1" width="100%" height="400" src="https://opensea.io/collection/twilightscapes" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'30vh', borderRadius:'12px'  }} />
</div>



{/* <br />
<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
<CommentBox />
</div>
<br /> */}



<p style={{textAlign:'center', fontSize:'clamp(.8rem, 1.4rem, 2rem)', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Don't see the twilightscape you're looking for?</p>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>


    </Layout>
     </CustomBox>
     </>

  )
}