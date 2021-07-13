

import * as React from "react"
import { graphql, Link } from "gatsby"
import { Seo } from "../../components/seo"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"

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



<div style={{textAlign:'center', fontWeight:'bold', width:'100%', margin:'2rem 0 0 0'}}>Themed Galleries:</div>

<div style={{display:'flex', width:'90vw', margin:'0 auto 1rem auto', padding:'', border:'0px solid #333', borderRadius:'12px', gap:'0'}}>


<Link to="./milky-way/"
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
  Milky Way
</Link>

<Link to="./crazy-geology/"
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
  Crazy Geology
</Link>

<Link to="./in-the-city/"
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

{/* <div style={{}}></div>
<div style={{}}></div> */}
</div>


    

    <div className="frontprod">
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