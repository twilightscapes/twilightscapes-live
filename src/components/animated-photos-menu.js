import * as React from "react"

import GoBack from "./goBack"

import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "./seo"


// import Footer from '../../components/Footer'

import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`

`






const CaseStudyVertIndex = () => (

   <CustomBox>


  





  
<div className="container2" style={{position:'', height:'600px', display:'', border:'5px solid ', margin:'5vh 6vw 0 6vw', borderRadius:'12px', boxShadow:'0 2px 3px 1px #777', transition:'background 0.3s ease-in'}}>




 


    
<section className="child" style={{position:'relative', height:'100%', overflow:''}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
      <div style={{alignSelf: 'flex-center', position:'absolute',  top:'2vh', textAlign:'center',}}>
        <h2 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}><Link state={{modal: true}} className="button" to="/experiences/alien-egg-farm-naked">Enter the alien Experience</Link></h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-alien-egg-farm.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  </section>
{/* END Panel 1 */}


<section className="child" style={{position:'relative', height:'100%', overflow:''}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', position:'absolute', }}>
<div style={{alignSelf: 'flex-center', position:'absolute',  top:'2vh', textAlign:'center',}}>
        <h2 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}><Link state={{modal: true}} className="button" to="/experiences/crude-addiction-naked">Enter the crude Experience</Link></h2>
    </div>
  </div>
  <div style={{position:'absolute', zIndex:'-1'}}><StaticImage src="../img/interactive-photo-banner-crude-addiction.jpg" alt="Twilightscapes" className="featured-imaged" /></div>
  </section>
{/* END Panel 2 */}









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