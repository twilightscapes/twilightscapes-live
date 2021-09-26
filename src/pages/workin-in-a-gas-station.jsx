import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Link } from "gatsby"
import { Seo } from "../components/seo"
// import { Helmet } from "react-helmet"
// import { RiSendPlane2Line } from "react-icons/ri"
import { RiArrowRightSLine } from "react-icons/ri"
import { IoLogoVercel } from "react-icons/io5"
import { BsCircleFill } from "react-icons/bs"
import { FaSquareFull } from "react-icons/fa"
// import { StaticImage } from "gatsby-plugin-image"
import ShareSocial from '../components/share' 
import { FaHandPointDown } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
import CommentBox from "../components/commentbox"
import styled from 'styled-components'

const CustomBox = styled.div`

`

export const query2 = graphql`
  query {
    shopifyCollection(handle: { eq: "workin-in-a-gas-station" }) {
      products {
        ...ProductCard
      }
    }
  }
`

       // export default function nftPage({ data: { products } }) {
              export default function nft2Page({ data }) {

                return (
                  <>
                  
                  
                  
                  
                  
<CustomBox>
                  
   <Layout className="nft-page" style={{position:'relative'}}>
                  
                      
   <Seo
       title={`Workin In A Gas Station NFTs`}
       description={`Twilightscapes NFTs - NFT Art photography for collectors`}
       image={'https://twilightscapes.com/default-image-gas-station.jpg'}
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
                    Workin' In A Gas Station
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
                  
                  
                  <p className="neonText" style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#fff'}}>Workin' In A Gas Station </p>
                  
                  <p style={{textAlign:'center', fontSize:'140%', marginTop:''}}>A collection of old abandoned roadside filling gas stations</p>
                  
                  <h3 style={{textAlign:'center', fontSize:'120%', marginTop:''}}>"You're gonna wind up workin in a gas station"</h3>

      

<h4>How little did I know that my favorite Zappa song would become so apropos as the title for this collection.</h4>
<br />

<h5>One of my favorite subject matters has always been old gas stations. I guess it started along with my fascination and later obsession with Route 66.</h5>
<br />

<h6>As I explored countless small towns and interstate off-ramps to follow Route 66, I became enamored with the beauty in these old vestiges of an era when the car was king and the open road was  everyone's adventure.</h6>
<br />

<blockquote style={{width:'60%', maxWidth:'80vw', margin:'50px auto', }}>Here I present some of my favorite gas stations that I've "worked in". <br />These images comprise an important part of my life. Just as I explored Route 66 over many years, I did the same with my photography style.
  <br /><br />
<div style={{textAlign:'right', marginRight:'20%'}}>– Todd Lambert</div></blockquote>



<br />
{/* <hr /> */}
<br />
<h4>All Twilightscapes NFTs include maximum resolution, lossless compressed TIFF files from the original source RAW data and includes print rights.</h4>
<br />
<p>All Twilightscapes feature NFTNOW™ - get instant delivery of your NFT. No more waiting!</p>
<br /><br />
<p style={{textAlign:'center', fontWeight:'bold', fontSize:'120%'}}>ONLY 14 one-of-one pieces will be released in this Limited Edition  series.</p>

       
                      </div>
                         
 
                      </section>
                     
                  

                  
                  
                  
              
                  <div className="nft"><ProductListing products={data.shopifyCollection.products} />
                  </div>
                    
<br /><br />

<a aria-label="Link to OpenSea" href="https://opensea.io/collection/workin-in-a-gas-station"
className="navbar-item button fire actionJackson"
style={{
  cursor:'pointer',
  width:'80%',
  maxWidth:'600px',
  margin:'0 auto',
  display:'flex',
  alignSelf:'center'
}}
rel="noreferrer" target="_blank"
>This Collection Available on OpenSea 
<span className="icon -right"><RiArrowRightSLine /></span></a>
<br />
                  <div className='NFTiframer-wrapper' style={{position:'relative', top:'0', zIndex:'0', width:'100%', maxWidth:'60vw', maxHeight:'50vh', margin:'0 auto', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)', background:'#fff', borderRadius:'12px' }}>

<iframe title="Twilightscapes on OpenSea" id="youtube2" className="blog-video1" width="100%" height="400" src="https://opensea.io/collection/workin-in-a-gas-station" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'50vh', borderRadius:'12px'  }} />
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



    



