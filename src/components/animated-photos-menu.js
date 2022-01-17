import * as React from "react"

// import GoBack from "./goBack"

import { StaticImage } from "gatsby-plugin-image"
// import { Seo } from "./seo"


// import Footer from '../../components/Footer'

import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
// import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`



@media (max-width: 48rem) {
.container2 {height:250px !important; margin-top:60px !important;}
}

`






const CaseStudyVertIndex = () => (

   <CustomBox>


  





  
<div className="container2" style={{display:'', justifySelf:'center', maxWidth:'1042px', height:'600px',  border:'5px solid ', margin:'5vh 12% 2rem 12%', borderRadius:'12px', boxShadow:'0 2px 3px 1px #FA02B7', transition:'background 0.3s ease-in'}}>




 


    
<section className="child" style={{position:'relative', height:'100%', overflow:''}}>

<Link state={{modal: true}} className="" to="/feature/alien-egg-farm#___gatsby">
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
      <div style={{alignSelf: 'flex-center', position:'absolute',  bottom:'30px', textAlign:'center',}}>
        <h2 className="moreButton" style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}>Enter the Experience</h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-alien-egg-farm.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  </Link>
  </section>
{/* END Panel 1 */}


<section className="child" style={{position:'relative', height:'100%', overflow:''}}>

  <Link state={{modal: true}} className="" to="/feature/transcendence#___gatsby">

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
<div style={{alignSelf: 'flex-center', position:'absolute',  bottom:'30px', textAlign:'center',}}>
        <h2 className="moreButton" style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}>Enter the Experience</h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-transcendence.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  
  </Link>
  </section>
{/* END Panel 2 */}


<section className="child" style={{position:'relative', height:'100%', overflow:''}}>

  <Link state={{modal: true}} to="/feature/crude-addiction#___gatsby">

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
<div style={{alignSelf: 'flex-center', position:'absolute',  bottom:'30px', textAlign:'center',}}>
        <h2 className="moreButton" style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}>Enter the Experience</h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-crude-addiction.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  </Link>
  </section>
{/* END Panel 3 */}


<section className="child" style={{position:'relative', height:'100%', overflow:''}}>

  <Link state={{modal: true}} to="/feature/wormhole#___gatsby">

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
<div style={{alignSelf: 'flex-center', position:'absolute',  bottom:'30px', textAlign:'center',}}>
        <h2 className="moreButton" style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}>Enter the Experience</h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-wormhole.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  </Link>
  </section>
{/* END Panel 4 */}




<section className="child" style={{position:'relative', height:'100%', overflow:''}}>

  <Link state={{modal: true}} to="/feature/time-trolley">

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
<div style={{alignSelf: 'flex-center', position:'absolute',  bottom:'30px', textAlign:'center',}}>
        <h2 className="moreButton" style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}>Enter the Experience</h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-time-trolley.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  </Link>
  </section>
{/* END Panel 5 */}








{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}


{/* <Footer /> */}


</div>

{/* <h2 style={{textAlign:'center', margin:'0', fontSize:'200%'}}>Interactive Photo Experiences</h2> */}


</CustomBox>

)
export default CaseStudyVertIndex