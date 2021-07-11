import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Link } from "gatsby"
import { Seo } from "../../components/seo"
// import { Helmet } from "react-helmet"
// import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
// import { IoLogoVercel } from "react-icons/io5"
// import { BsCircleFill } from "react-icons/bs"
// import { FaSquareFull } from "react-icons/fa"


// import { MoreButton } from "../components/more-button"
// import { title } from "../pages/index.module.css"



// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "./index.module.css"

import Image from '../../components/Image'
import ScrollAnimation from 'react-animate-on-scroll'
// import { GiPlainArrow } from 'react-icons/gi'

import styled from 'styled-components'

const CustomBox = styled.div`




@media (min-width: 58rem) {

	}


       

`






// export const query = graphql`
//   query {
//     shopifyCollection(handle: { eq: "limited-edition-nft-kits" }) {
//       products {
//         ...ProductCard
//       }
//     }
//   }
// `

       // export default function nftPage({ data: { products } }) {
              export default function gasstationPage() {

  return (
<>



{/* <Seo title={`Gonna wind up working in a gas station`} />
<Seo description={`Frank Zappa had it all right`} /> */}
{/* <Seo image={'/default-og-image-blank.jpg'} /> */}



<CustomBox>

    <Layout className="gasstations-page" style={{position:''}}>
    <Seo
          title={`Gonna wind up working in a gas station`}
          description={`Frank Zappa had it all right`}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />
    
    {/* <div className="vidbox"> */}
    {/* <div style={{position:'absolute', top:'', fontSize:'10vw', color:'white', zIndex:'', display:'flex', justifyContent:'center', alignItems:'center', border:'0px solid blue', width:'100vw'}}>Milky Way
    </div> */}
{/* <video autoPlay autobuffer="true" playsInline loop muted>
  <source src={video} type="video/mp4" />
</video> */}

    {/* </div> */}


    <div className="vidbox">
<div className="video-background">
    <div className="video-foreground">
      
      <iframe className="" src="https://www.youtube.com/embed/iH5sjz0nx9o?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=iH5sjz0nx9o" frameBorder="0" allowFullScreen></iframe>
    </div>
</div>
</div>


    {/* <div id="vidtop-content">
<div className="vid-info">
	  <strong>Meet Todd</strong>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of</p>
  </div>
</div> */}
 

 
<div style={{position:'', zIndex:'', width:'90%', display:'flex', justifyContent:'center', padding:'1rem 3%', gap:'30px'}}>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut aliquam, placeat aperiam error fugiat ipsum laboriosam corporis quos quae ea? Eligendi fuga similique, laborum nam at atque sapiente dicta.</p>
</div>
    
    </Layout>
     </CustomBox>
     </>

  )
}