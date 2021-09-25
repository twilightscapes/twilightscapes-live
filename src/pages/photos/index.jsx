

import * as React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../../components/seo"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { FaHandPointDown } from "react-icons/fa"
import GalleryMenu from "../../components/galleryMenu"
// import { Helmet } from "react-helmet"
// import TouchUp from '../components/TouchUp'
import { RiSendPlane2Line } from "react-icons/ri"
import { Helmet } from "react-helmet"
import { FiZoomIn } from 'react-icons/fi'
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





img{cursor: zoom-in !important;}




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






<div className="zoomer" style={{zIndex:'1', position:'fixed', bottom:'5vh', display:'flex', justifyContent:'center', width:'100vw'}}>
    <span style={{display:'flex',alignItems:'center', justifyContent:'center', position:'fixed', bottom:'50px', zIndex:'1', textAlign:'center', color:'#fff', fontSize:'100%', fontFamily:'Hammersmith One', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', }}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</span>
</div>



<GalleryMenu />


    

    <div className="frontprod" style={{marginTop:'2rem'}}>
      <ProductListing products={data.shopifyCollection.products} className="frontprod" />
</div>
      {/* <Link
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
            </Link> */}

            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'2rem 0 2rem 0'}}>
              
              

{/* <p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'var(--primary-color)', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div> */}
</div>

{/* <blockquote style={{fontSize:'130%', border:'1 px dotted', padding:'1rem', borderRadius:'12px', width:'60%', margin:'3rem auto 1rem auto', padding:'0 8%', textAlign:'center'}}>You know what they say about people who can't pick 3 of anything? Maybe we need to talk?</blockquote> */}


<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>


   </Layout></CustomBox>
    </>
  )
}