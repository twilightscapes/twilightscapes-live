
import * as React from "react"
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import CookieConsent from "react-cookie-consent";
import ScrollAnimation from 'react-animate-on-scroll'


const Consent = () => (

//     <ScrollAnimation animateIn="bounceInUp" delay={0} style={{ display:'flex',  position: 'fixed', bottom:'50px',
// left:'0', right:'0',  alignItems:'center', zIndex:'1', width:'100%',}}>

<CookieConsent
	debug={false}
	location="none"
	style={{ zIndex:'1', opacity:'1', padding:'2vh 3%', margin:'0 auto', border:'0px solid white', position:'relative', top:'0', zIndex:'2', display:'flex', alignSelf:'center', width:'50vw', justifyContent:'center', background:'transparent'
   }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{justifyContent:'center', textAlign:'center', fontSize: "13px", fontWeight:'bold', borderRadius:'5px', color:'white',   top:'10px',  position:'relative', margin:'0', background:'transparent', border:'1px solid',
    filter:'drop-shadow(1px 1px 10rem #fff)',
    boxShadow:' 0px 1px 6px 1px black',
    backdropFilter: 'blur(10px)',
    textShadow: '1px 2px 2px rgba(0,0,0,.9)'
 }}
    
    contentStyle={{margin:'0', padding:'0', border:'0px solid red'}}

    expires={364}
    cookieName="AdFreeYT.com-site-pref-cookie"
>


    <div style={{color:'#999', padding:'0 0 0 0', fontSize:'90%', textAlign:'center',}}>
     We use cookies to optimize our website.{" "}<br />
    <span style={{ fontSize: "75%" }}>
   <a style={{color:'#999 !important'}} href="/privacy/" style={{textDecoration:'underline'}}>Do Not Sell My Personal Information</a>
    </span>
    </div>
    
</CookieConsent>
// </ScrollAnimation>

)

export default Consent


