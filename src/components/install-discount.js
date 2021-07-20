import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { IoShareOutline } from 'react-icons/io5';
import { FaRegPlusSquare } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";


const CustomBox = styled.div`
// #installer {
//   animation: cssAnimation 0s 1s forwards;
//   visibility: hidden;
// }

// @keyframes cssAnimation {
//   to   { visibility: visible; }
// }




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`

const InstallDiscount = () => (
<>


<CustomBox style={{}} className="">



<div id="installer" className="popper" style={{ display:'flex', justifyContent:'center', alignContent:'center', position: 'fixed', top:'60px',
left:'0', right:'0', display:'flex', justifyContent:'center', alignItems:'center', background:'transparent'}}>




<div id="installer" className="installer popper" style={{display:'flex', position:'fixed', top:'60px',}} >







<CookieConsent
	debug={false}
	location="none"
	style={{ color:'inherit', width:'auto', background:'inherit',  alignItems:'inherit',  textAlign:'left', justifyContent:'center', margin:'0 auto', top:'0', maxWidth:'600px', position:'relative', border:'0px solid red', }}
    buttonText="OK Got it"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "16px", bottom:'10px', position:'absolute', display:'flex', alignContent:'center', color:'inherit', }}
    expires={1}
    cookieName="twilightscapes.com-install-discount-cookie"
>




{/* <div className="backdrop" style={{left:'0', top:'-60px'}}></div> */}
<div className="container" style={{padding:'2rem 1rem', border:'1px solid #555', borderRadius:'8px', background:'#111', textAlign:'center'}}>


	
	<p style={{textAlign:'center', fontSize:'clamp(1.6rem, -0.875rem + 7.333vw, 2.5rem)', padding:'0', margin:'0 0 10px 0', overflowWrap:'break-word'}}>Install Twilightscapes <br /> <strong>Get 30% off</strong></p>
	
	{/* <p style={{fontSize:'100%', textAlign:'left',}}>
  Twilightscapes has app functionality. Add it to your home screen to get added features, exclusive content, and fullscreen capability. </p> */}
    
    <p style={{fontSize:'90%', }}>Get a special coupon code for 30% off!</p>

 
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto', padding:' .5rem .7rem', border:'2px dotted #FA02B7', borderRadius:'8px',}}>To Get Started:
  <br />Simply click the "install" icon on the right-side of your browser address bar</div>


	<br />
  <span style={{fontSize:'80%'}}>For Apple iOS users:</span>

    <div style={{fontSize:'85%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto 5px 0', padding:' 1rem', border:'2px dotted #777', borderRadius:'8px',}}>
    
  <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
 <IoShareOutline style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
  1) Press the 'Share' button 
</div>

 <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
 <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
 
2) Press 'Add to Home Screen'
 </div>
 
 </div>
 {/* <span style={{fontSize:'80%'}}>MacOS: please use a Chrome-based browser.</span> */}
    {/* <br /> */}
    <br />
    </div>
    
</CookieConsent></div>
    </div>


</CustomBox>
</>
)

export default InstallDiscount