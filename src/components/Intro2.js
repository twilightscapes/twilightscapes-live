import React from 'react'
import styled from "styled-components"
// import Newsletter from './PopNewsletter'
import ScrollAnimation from 'react-animate-on-scroll'
import Newsignup from "../components/newssign"
import { StaticImage } from "gatsby-plugin-image"
// import Night319 from "../../static/assets/night316.svg"
const CustomBox = styled.div`

.slider{object-fit: scale-down;}

// div:first-of-type{padding:0 !important; margin:0 !important;}

@media (max-width: 48em) {
	.image-wrap h1, .image-wrap h2, .image-wrap h3  {font-size:300% !important; border:0px solid red !important;}
	.image-wrap .news-btn{ margin-top:1rem;}
	.image-wrap .innerpanel{font-size:70% !important;}
  .signup{ bottom:150px;}
}

@media (min-width: 58em) {
	.textbox{padding-top: !important;}
  .signup{ bottom:250px;}
}


`



   
const Intro2 = () => (

   


<CustomBox style={{}}>


<div className="" style={{zIndex:'-1', width:'', height:'', backgroundSize:'cover'}}>
  
  <StaticImage style={{backgroundSize:'cover', width:'100%'}} className="" src="../img/favorites/night316.jpg" alt="Colorado at night with Twilightscapes" />

{/* <Night319 /> */}

  
  </div>



<div className="abcontent" style={{position:'relative', height:'', width:'100%', top:'50px', right:'', display:'flex', justifyContent:'center', zIndex:'0'}}>

{/* <ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
<h2
  className="letter normal txtshadow-header hit-the-floor"
  style={{
    color: '#fff',
    fontSize: '60px',
   position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
    textAlign: 'right', 
    float: 'none',
    margin:'0',
    padding:'0',
  }}
>
  Follow me
</h2>
</ScrollAnimation> */}


{/* <ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'40px',
   color: 'white',
   position: 'relative',
    textAlign: 'right', 
    margin:'0',
    padding:'0',
  }}
>
  into the
</h2>
</ScrollAnimation> */}


{/* <ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'80px',
   color: 'white',
   position: 'relative',
//            top: '230px',
    textAlign: 'right',
    textTransform: 'uppercase', 
    margin:'0',
    padding:'0',
  }}
>
  Night
</h2>
</ScrollAnimation> */}



<ScrollAnimation className="signup" animateIn="bounceInUp" delay={950} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', borderRadius:'12px'}}>


  <Newsignup />
</ScrollAnimation>


</div>





</CustomBox>
  
)

export default Intro2