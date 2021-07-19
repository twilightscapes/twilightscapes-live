import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing-gear"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
// import { Helmet } from "react-helmet"
import { RiSendPlane2Line } from "react-icons/ri"
import { IoLogoVercel } from "react-icons/io5"
import { BsCircleFill } from "react-icons/bs"
import { FaSquareFull } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import ShareSocial from '../components/share' 

// import { MoreButton } from "../components/more-button"
// import { title } from "../pages/index.module.css"



// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "./index.module.css"


import ScrollAnimation from 'react-animate-on-scroll'
// import { GiPlainArrow } from 'react-icons/gi'

import styled from 'styled-components'

const CustomBox = styled.div`


a:after{display:none !important;}


// .intro:before{
// 	content: "Lightpainting Tools";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
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
    shopifyCollection(handle: { eq: "photo-tools" }) {
      products {
        ...ProductCard
      }
    }
  }






`

       // export default function nftPage({ data: { products } }) {
              export default function toolsPage({ data }) {

  return (
<>





<CustomBox>

    <Layout className="tools-page" style={{position:'relative'}}>

    
    <Seo
          title={`Light painting tools and photo gear`}
          description={`The best light painting tools and photo gear`}
          image={'https://twilightscapes.com/follow-me-into-the-night-promo.jpg'}
        />


 

<div className="vidbox" style={{maxHeight:'80vh'}}>
<div className="video-background">
    <div className="video-foreground">
      
    <iframe width="100%" height="350" src="https://www.youtube.com/embed/KnTw3-oW-vQ?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=KnTw3-oW-vQ" classname="" frameborder="0" allowfullscreen=""></iframe>
    </div>
</div>
</div>

  



    <section className="nft" style={{paddingTop:'0', overflow:'', margin:'1vh', background:''}}>
    

    <div className="" style={{background:'', padding:'1vh 12% 0 12%', textAlign:'left'}}>

    <h1 style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)'}}>TwilightTools™</h1>
          

<p style={{textAlign:'center', margin:'0 12%'}}>
From light painting to timelapse and rig setups, Twilightscapes has you covered.
</p>




<br />

<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
  

<br />
<br />

<h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem auto'}}>Don't see what you're looking for?</h3>
<Link state={{modal: true}} to="/contact/" style={{textAlign:'center', fontSize:'120%', fontWeight:'bold', maxWidth:'700px', margin:'0 auto', textDecoration: 'underline',}} className="moreButton">Request it!</Link>



</div>
</section>


    </Layout>
     </CustomBox>
     </>

  )
}