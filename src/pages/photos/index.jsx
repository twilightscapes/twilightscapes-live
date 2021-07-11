

import * as React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../../components/seo"
import { Layout } from "../../components/layout"
import Image from '../../components/Image'
import { ProductListing } from "../../components/product-listing"
import Social from "../../components/social"
import Newsignup from "../../components/newssign"
// import { Helmet } from "react-helmet"
// import TouchUp from '../components/TouchUp'
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
import { Helmet } from "react-helmet"

// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "../../index.module.css"

import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`










@media (min-width: 58em) {

}


`


export const query = graphql`
query {
  shopifyCollection(handle: { eq: "frontpage" }) {
    products {
      ...ProductCard
    }
  }
}
`

export default function GalleryPage({ data }) {
  return (
<> 
<Helmet>
    <body className="gallery" />
    
</Helmet>

<Seo
          title={`Twilightscapes Photo Galleries`}
          description={`Twilightscapes night photography`}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />




    <CustomBox>
    <Layout>


    {/* <div className="vidbox">
<div className="video-background">
    <div className="video-foreground">
      
      <iframe className="" src="https://www.youtube.com/embed/iH5sjz0nx9o?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=iH5sjz0nx9o" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>
</div> */}






<div style={{textAlign:'center', fontWeight:'bold', width:'100%', margin:'2rem 0'}}>Themed Galleries:</div>

<div style={{display:'flex', width:'90vw', margin:'0 auto 2rem auto', padding:'.5rem', border:'1px solid #333', borderRadius:'12px'}}>


<Link to="./milky-way/"
className="moreButton"
style={{
cursor:'pointer',
textAlign:'center',
margin:'2rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
}}>
  Milky Way
</Link>

<Link to="./crazy-geology/"
className="moreButton"
style={{
cursor:'pointer',
textAlign:'center',
margin:'2rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
}}>
  Crazy Geology
</Link>

<Link to="./in-the-city/"
className="moreButton"
style={{
cursor:'pointer',
textAlign:'center',
margin:'2rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
}}>
  In The City
</Link>

{/* <div style={{}}></div>
<div style={{}}></div> */}
</div>


    

    <div className="frontprod">
      <ProductListing products={data.shopifyCollection.products} className="frontprod" />
</div>
      <Link
              className="moreButton"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              to="/vault/favorites/"
            >
              View More {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link>

            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 2rem 0'}}>

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'#FA02B7', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div>
</div>

   </Layout></CustomBox>
    </>
  )
}