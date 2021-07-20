import * as React from "react"
import { graphql } from "gatsby"

import { ProductListing } from "./product-listing"
import { Link } from "gatsby"
import { Seo } from "./seo"
// import { Helmet } from "react-helmet"
import { RiSendPlane2Line } from "react-icons/ri"
import { IoLogoVercel } from "react-icons/io5"
import { BsCircleFill } from "react-icons/bs"
import { FaSquareFull } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import ShareSocial from './share' 

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
    shopifyCollection(handle: { eq: "photo-tools" }) {
      products {
        ...ProductCard
      }
    }
  }






`

       // export default function nftPage({ data: { products } }) {
              export default function gearboxPage({ data }) {

  return (
<>





<CustomBox>



    
    <Seo
          title={`Photography`}
          description={`Twilightscapes`}
          image={'https://twilightscapes.com/follow-me-into-the-night-promo.jpg'}
        />


 



  



    <section className="nft" style={{paddingTop:'0', overflow:'', margin:'1vh', background:''}}>
    

    


   
    
       
       

    </section>
 

 




<br />
<br />


<br />

<div className="nft">
  <ProductListing products={data.shopifyCollection.products} />
</div>
  

<br />




     </CustomBox>
     </>

  )
}