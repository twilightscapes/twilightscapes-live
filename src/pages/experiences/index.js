import * as React from "react"
import { Layout } from "../../components/layout"
import GoBack from "../../components/goBack"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
// import CasePanels from "../components/casepanels"
// import LaunchPad from "../../components/launchpad"
import ScrollAnimation from 'react-animate-on-scroll'
import SpacePort from "../../../static/assets/spaceport.svg"
import PhotoMenu from "../../components/animated-photos-menu"
import CommentBox from "../../components/commentbox"
import ShareSocial from '../../components/share' 
import { FaHandPointDown } from "react-icons/fa"
import { Link } from "gatsby"
import Audio from '../../../static/assets/bensound-betterdays.mp3'


export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "feature" }) {
      products {
        ...ProductCard
      }
    }
  }
`


export default function experiencesPage({ data }) {
                

  return (
<>
    
    <Layout className="thanks-page">

<Helmet>
  <body className="featurepage2" />
</Helmet>

<Seo
          title={`Animated Photo Experiences by Twilightscapes`}
          description={`Experiences are a new melding of visual, audio and interactive together in a new medium for art`}
          image={'https://twilightscapes.com/experiences-promo.jpg'}
        />


{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={6950} initiallyVisible={false} animateOnce={false} animatePreScroll={true} style={{position:'absolute', top:'50vh',
right:'10vw', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', borderRadius:'12px'}}>


<LaunchPad />
</ScrollAnimation> */}

{/* <SpacePort /> */}

<div className="audio">
  <strong>FULL Experience:</strong> &nbsp; <audio controls="controls" autoplay="true" src={Audio} style={{}}> 
    Your browser does not support the HTML5 Audio element.
</audio>
</div>


<PhotoMenu />


<div style={{textAlign:'center', fontSize:'2rem', padding:'0', margin:'10px 0 1rem 0', display:'flex', justifyContent:'center'}}>
Gift Shop &amp; Guest Book &nbsp; <FaHandPointDown /></div>


 <ShareSocial />
 <br /><br />
<div style={{textAlign:'center', fontSize:'2rem', padding:'0', margin:'10px 0 1rem 0'}}>WANT THE PHOTO? <br /> TWILIGHTCAPES ARE ONLY $29</div>

<div className="nft"><ProductListing products={data.shopifyCollection.products} />
</div>
<br /><br />


<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
    </div>



      <div className="container" style={{padding: '2rem 10%'}}>
   

      {/* <Link state={{modal: true}} to="/deconstructed-photography/alien-egg-farm-naked/" className="navbar-item  button fire" style={{margin:'2rem', textDecoration:'none'}}>Contact Me - I &nbsp;<FaHeart />&nbsp;feedback!</Link> */}


       </div>

    
    
    </Layout>

    </>

)
}
