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
       image={'https://twilightscapes.com/default-og-image-nft.jpg'}
        />
                  

<section className="nft1" style={{paddingBottom:'1rem', overflow:'', margin:'1vh', background:''}}>
   
  <div className="" style={{background:'', padding:'1vh 12% 0 12%', textAlign:'left'}}>
                  
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

                      <div className="" style={{background:'', padding:'1vh 12% 0 12%', textAlign:'left'}}>
                  
                  
                  <p className="neonText" style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#fff'}}>Workin' In A Gas Station </p>
                  
                  {/* <p style={{textAlign:'center', fontSize:'140%', marginTop:''}}>An introduction to the work of Todd Lambert<br /> The Genesis Series</p> */}
                  
                  <p style={{textAlign:'center', fontSize:'120%', marginTop:''}}>"You're gonna wind up workin in a gas station"</p>

<p>How little did I know that my favorite Zappa song would become so apropos as the title for this collection.</p>

<p>One of my favorite subject matters has always been old gas stations. I guess it started along with my fascination and later obsession with Route 66.</p>

<p>As I explored countless small towns and interstate off-ramps to follow Route 66, I became enamored with the beauty in these old vestiges of an era when the car was king and the open road was the countries adventure.</p>

<p style={{textAlign:'center', fontSize:'120%', marginTop:''}}>Here I present some of my favorite gas stations that I've "worked in".</p>



<p>All NFTs include maximum resolution, lossless compressed TIFF files with original source image and print rights included. All NFTs also feature NFT NOW™ - instant delivery of your NFT - No more waiting!</p>


<p>These 14 one-of-one pieces will be the only ones released in this series.</p>
                  
                  {/* <Genesis /> */}
                  
                  
                  
                  {/* <p style={{textAlign:'center', fontSize:'100%',}}>Genesis Series presented <br />  exclusively on Foundation
                  <div style={{fontSize:'40px', display:'flex', justifyContent:'center', gap:'3px', marginTop:'10px', filter: 'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.99))' }}><IoLogoVercel /><BsCircleFill style={{marginLeft:'-6px', fontSize:'36px'}} /><FaSquareFull style={{marginLeft:'2px', fontSize:'36px'}} /></div>
                  
                  <span style={{}}>View the work on Foundation</span>
                  </p> */}
                  
                  
                  {/* <br /><br />
                  <p style={{textAlign:'center', fontSize:'100%', fontWeight:'bold', maxWidth:'700px', margin:'0 auto'}}>
                         winning bids will receive a special NFT package including: behind the scene information, a certificate of authenticity and a limited edition signed print.<br />
                         <br />
                         Original source RAW file included.<br />The image will also be taken out of future commissions and retired.
                  </p> */}
                  
                  
                      </div>
                         
                  
                      {/* <div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'auto', overflow:'', filter: 'drop-shadow(0 0 20px #000)' }}>
                  <iframe src='https://opensea.io/Twilightscapes?embed=true&tab=created'
                          width='100%'
                          height='1200px'
                          frameborder='0'
                          allowfullscreen style={{position:'absolute', top:'0'}}></iframe>
                  </div> */}
                  
                  
                      
                        {/* <ShareSocial /> */}
                  
                   {/*
                         <div className="" />
                   <ScrollAnimation animateIn="bounceInUp"  animateOnce={true} delay={100} style={{position:'relative', height:'100%', border:'0px dotted #000', marginTop:'4rem', paddingTop:'1rem', background:''}}>
                  
                  
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
                      {/* <div className="spacer33" />
                  
                  
                  
                  
                      <div className="vidbox" style={{maxHeight:'80vh'}}>
                  <div className="video-background">
                      <div className="video-foreground">
                        
                        <iframe className="" width="100%" height="350" src="https://www.youtube.com/embed/vWNkRK6-oU4?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=vWNkRK6-oU4" frameBorder="0" allowFullScreen></iframe>
                      </div>
                  </div>
                  </div> */}
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  {/* 
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
                  
                  </div> */}
                  
                  
                  
                  
                  <br />
                  <br />
                  
                  
                  <br />
                  
                  <div className="nft"><ProductListing products={data.shopifyCollection.products} />
                  </div>
                    
                  
                  {/* <br />
                  <div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
                  <CommentBox />
                  </div>
                  <br /> */}
                  
                  
                  
                  <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Don't see the twilightscape you're looking for?</h3>
                  
                  <ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
                  <FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
                  </ScrollAnimation>
                  
                  
                      </Layout>
                       </CustomBox>
                       </>
                  
                    )
                  }



    



