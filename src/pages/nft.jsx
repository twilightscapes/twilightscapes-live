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
    shopifyCollection(handle: { eq: "genesis" }) {
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
          image={'https://twilightscapes.com/follow-me-into-the-night-promo.jpg'}
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



<ul className="galmenu custom-gal" style={{margin:'0 !important',}}>

      <li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Limited Editions</li>

      <li className="galmenu-item">
     
<Link to="/nft/"
className="button"
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Follow Me Into The Night
</Link>
      </li>
     
      <li className="galmenu-item">
      <Link to="/workin-in-a-gas-station/"
className="button"
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Workin' In Gas Station
</Link>
      </li>
      
      {/* <li className="galmenu-item">
      <Link to="/photos/in-the-city"
className="button"
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  In The City
</Link>
      </li> */}
      </ul>



      <br /><br /><br />


      <section className="nft1" style={{paddingTop:'0', overflow:'', margin:'1vh', background:''}}>

<div className="" style={{background:'', padding:'1vh 8vw 0 8vw', textAlign:'left'}}>


<p className="neonText" style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#fff'}}>Follow Me Into The Night </p>

<h3 style={{textAlign:'center', fontSize:'140%', marginTop:''}}>An introduction to Todd Lambert<br /> <span style={{fontSize:'66%'}}>The Genesis Series</span></h3>

<br /><br />

<p>Finding obscure locations and unusual subject matter, Todd has excelled at capturing rarely seen moments of time in unique locations.</p>

<p>As a location scout and avid urban explorer, Todd learned to photograph what he sees at night.</p>

<p style={{textAlign:'',}}>Let Todd's award winning work prove to you that the night is indeed beautiful.</p>

<blockquote style={{width:'60%', maxWidth:'80vw', margin:'50px auto', }}>The night is misunderstood and often feared. But the truest colors come out only at night. There is no better time than nighttime.
  <br /><br />
<div style={{textAlign:'right', marginRight:'20%'}}>– Todd Lambert</div></blockquote>



<br />
{/* <hr /> */}
<br />
<h4>All Twilightscapes NFTs include maximum resolution, lossless compressed TIFF files from the original source RAW data and includes print rights.</h4>
<br />
<h5>All Twilightscapes feature NFTNOW™ - get instant delivery of your NFT. No more waiting!</h5>
<br /><br />
<h6 style={{textAlign:'center', fontWeight:'bold', fontSize:'120%'}}>ONLY 14 one-of-one pieces will be released in this Limited Edition genesis series.</h6>



    </div>       

   
    </section>
   




    



<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
  

<br /><br />

<a aria-label="Link to OpenSea" href="https://opensea.io/collection/followmeintothenight"
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

<iframe title="Twilightscapes on OpenSea" id="youtube2" className="blog-video1" width="100%" height="400" src="https://opensea.io/collection/followmeintothenight" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'30vh', borderRadius:'12px'  }} />
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