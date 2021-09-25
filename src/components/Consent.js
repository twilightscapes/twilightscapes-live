
import * as React from "react"
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
// import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent";
// import ScrollAnimation from 'react-animate-on-scroll'


const Consent = () => (

    // <ScrollAnimation animateIn="bounceInUp" animateOnce="true" delay={0} style={{ display:'flex', alignItems:'center', zIndex:'1', width:'100%',}}>

<CookieConsent
	debug={false}
	location="none"
	style={{ opacity:'1', padding:'0 3%', margin:'0 auto', border:'0px solid white', position:'relative', top:'0', zIndex:'0', display:'flex', alignSelf:'center', width:'50vw', justifyContent:'center', color:'#fff', background:''
   }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{justifyContent:'center', textAlign:'center', fontSize: "16px", fontWeight:'bold', borderRadius:'5px', color:'',   top:'10px',  position:'relative', margin:'0 0 0 0', padding:'.8rem 1rem', background:'transparent', border:'1px solid',
    // filter:'drop-shadow(1px 1px 10rem #fff)',
    boxShadow:' 0px 1px 6px 1px black',
    backdropFilter: 'blur(10px)',
    textShadow: '1px 2px 2px rgba(0,0,0,.9)'
 }}
    
    contentStyle={{margin:'0', padding:'0', border:'0px solid red'}}

    expires={364}
    cookieName="site-pref-cookie"
>


    <div style={{color:'inherit', padding:'0 0 0 0', fontSize:'100%', textAlign:'center',}}>
     We use cookies to optimize our website.{" "}<br />
    <span style={{ fontSize: "75%", color:'inherit' }}>
   <a className="donotsell" href="/privacy/">Do Not Sell My Personal Information</a>
    </span>
    </div>
    
</CookieConsent>
//</ScrollAnimation> 

)

export default Consent


