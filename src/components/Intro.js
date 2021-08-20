import React from 'react'
import styled from "styled-components"
// import Newsletter from './PopNewsletter'
import ScrollAnimation from 'react-animate-on-scroll'
// import Newsignup from "./newssign"
// import { StaticImage } from "gatsby-plugin-image"

import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
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



   
const Intro = () => (

   


<CustomBox style={{}}>


<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>
{/*   
  <StaticImage style={{backgroundSize:'cover', width:'100%'}} className="" src="../img/favorites/night316.jpg" alt="Colorado at night with Twilightscapes" /> */}

<ReactPlayer
          className='react-player'
          url="https://www.youtube.com/embed/fm-rOnGIIaE?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=fm-rOnGIIaE"
          width="100%"
          height="100%"
     
 
          autoplay={true}
          background={true}
          loop
          playing
          playsinline
          muted={true}
          showPortrait
        //   playIcon={
        //     <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'10%'}}>
              
      
      
      
        // <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
        //   <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
        //   <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
          
        //   </div>
        //   </button>}
      
      
      
        //     light="../assets/transparent.png"
          />

  




<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0', display:'flex', justifyContent:'center', flexDirection:'column', zIndex:'0'}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
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
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
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
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
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
</ScrollAnimation>



{/* <ScrollAnimation className="signup" animateIn="bounceInUp" delay={3950} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center', display:'flex', borderRadius:'12px'}}>
  <Newsignup />
</ScrollAnimation> */}


</div>
</div>




</CustomBox>
  
)

export default Intro