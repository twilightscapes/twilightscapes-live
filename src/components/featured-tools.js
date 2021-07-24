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


// import Img1 from './Img1'
// import Img2 from './Img2'
// import Img3 from './Img3'
// import Img4 from './Img4'
// import "../styles/nft.css"
const CustomBox = styled.div`

// caras





`

const ToolsPanels = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper home-posts post-card" style={{marginTop:'0', overflow:'hidden', height:'80vh', margin:'2rem 0', overflow:'hidden'}}>
    





  <div className="slidepanel home-posts post-card" >
  








  <div className="outerpanel" style={{borderLeft:'none',}}>

<span className="headline" style={{bottom:'15vh'}}>TwilightTorch™</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', color:'#fff'}}>
          
          

 <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>
 <Link to="/art/gear/twilighttorch" target="_blank" rel="noopener noreferrer nofollow">
<StaticImage src="../img/torch-header.jpg" alt="Twilightscapes" className="" style={{ }} /></Link>

</div>


<div className="spacer66" style={{height:'5vh'}} />

          <h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>TwilightTorch</h2>

          <p className="letter">Your own personal light saber</p>



{/* <p>Single Shot - No PS - lightpainted long exposure</p> */}


<div style={{textAlign:'center', padding:'0', margin:'20px 0 0 0'}}>
              <Link
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'80%',
                backgroundColor:'#000 !important',
                textAlign:'center',
                display:'flex',
                margin:'0 auto'
                // flexDirection:'row',
                // justifyContent:'baseline'
              }}
              to="/art/gear/twilighttorch"
            >
              View TwilightTorch {" "}
            </Link>
  </div>

        </div>
        
        
    </div>
    <StaticImage src="../img/torch-header.jpg" alt="Twilightscapes" className="pop" />

 </div>















 <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline" style={{bottom:'15vh'}}>TwilightSlider™ </span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', color:'#fff'}}>
          
          

 <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>

 <Link to="/art/gear/twilightslider/">
<StaticImage src="../img/twilightslider-header.jpg" alt="Twilightscapes" className="" style={{ }} /></Link>

</div>

<div className="spacer66" style={{height:'5vh'}} />

          <h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>TwilightSlider</h2>

          <p className="letter">Integrated camera stand and motion dolly system.
</p>






{/* <p>Single Shot - No PS - long exposure</p> */}



<div style={{textAlign:'center', padding:'0', margin:'20px 0 0 0'}}>
<Link
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              to="/art/gear/twilightslider/"
            >
              View TwilightSlider {" "}
            </Link>
  </div>


        </div>
        
        
    </div>
    <StaticImage src="../img/twilightslider-header.jpg" alt="Twilightscapes" className="pop" />

 </div>












 <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline" style={{bottom:'15vh'}}>ColorWand™</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1', color:'#fff'}}>
          
          

 <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>

 <Link to="/art/gear/twilightcolorwand/">
 <StaticImage src="../img/colorwand-header.jpg" alt="Twilightscapes" className="featured-image " /></Link>

</div>

<div className="spacer66" style={{height:'5vh'}} />
          <h2 className="letter" style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>ColorWand</h2>

          <p className="letter">The perfect lightpainting tool - bring all the colors of the rainbow in one tool. </p>



<div style={{textAlign:'center', padding:'0', margin:'20px 0 0 0'}}>
<Link
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              to="/art/gear/twilightcolorwand/"
            >
              View ColorWand {" "}
            </Link>
  </div>


        </div>
        
        
    </div>
    <StaticImage src="../img/colorwand-header.jpg" alt="Twilightscapes" className="pop" />

 </div>







    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default ToolsPanels