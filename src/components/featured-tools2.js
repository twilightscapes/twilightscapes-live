import * as React from "react"
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'
import { RiSendPlane2Line } from "react-icons/ri"
// import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
// import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'
import css from "../styles/nft.css"

// import Img1 from './Img1'
// import Img2 from './Img2'
// import Img3 from './Img3'
// import Img4 from './Img4'
// import "../styles/nft.css"
const CustomBox = styled.div`







`

const FeaturedTools2 = () => (

    <CustomBox style={{}}>



<div className="container2 post-card " style={{position:'', height:'70vh', display:'', border:'5px solid ', margin:'3vh 6vw 0 6vw', borderRadius:'12px',  transition:'background 0.3s ease-in'}}>




<section className="child" style={{position:'relative', height:'65vh', overflow:''}}>
<Link className="" to="/art/gear/twilightslider/">
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

    </div>
  </div>
  
  
  <StaticImage src="../img/twilightslider-header.jpg" alt="Twilightscapes" className="featured-imaged" />
</Link>

  </section>



  <section className="child" style={{position:'relative', backgroundSize:'cover',  height:'65vh', overflow:''}}>
<Link className="" to="/art/gear/twilighttorch/">
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>

      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>

      

    </div>
  </div>
  
  
  <StaticImage src="../img/torch-header.jpg" alt="Twilightscapes" className="featured-imaged" />
</Link>
  </section>




<section className="child" style={{position:'relative', height:'65vh', overflow:''}}><Link className="" to="/art/gear/twilightcolorwand/">
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>
    
    </div>
  </div>
  
<StaticImage src="../img/colorwand-header.jpg" alt="Twilightscapes" className="featured-imaged" />
</Link>
  </section>






 


</div>



</CustomBox>
  
  )
  
  export default FeaturedTools2