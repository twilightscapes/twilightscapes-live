
import * as React from "react"
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import CookieConsent from "react-cookie-consent";
import ScrollAnimation from 'react-animate-on-scroll'


const Consent = () => (

    <ScrollAnimation animateIn="bounceInUp" delay={0} style={{ display:'flex',  position: 'fixed', bottom:'50px',
left:'0', right:'0',  alignItems:'center', zIndex:'1', width:'100%',}}>

<CookieConsent
	debug={false}
	location="none"
	style={{ zIndex:'1', opacity:'.8', background: 'rgba(0,0,0,0.99)', padding:'2vh 3%', margin:'0'
   }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{ color: "#fff", background: "#666", fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{ color: "#333", justifyContent:'center', textAlign:'center', background: "#eee", fontSize: "13px", fontWeight:'bold', borderRadius:'5px',  top:'10px',  position:'relative', margin:'0' }}
    contentStyle={{margin:'0', padding:'0', border:'0px solid red'}}

    expires={364}
    cookieName="Twilightscapes.com-site-pref-cookie"
>


    <div style={{ padding:'0 0 0 0', fontSize:'90%', textAlign:'center',}}>
     We use cookies to optimize our website.{" "}<br />
    <span style={{ fontSize: "75%" }}>
   <a href="/privacy/" style={{color:'#fff',}}>Do Not Sell My Personal Information</a> | <a href="/privacy/" style={{color:'#fff',}}>Privacy Policy</a>
    </span>
    </div>
    
</CookieConsent>
</ScrollAnimation>

)

export default Consent


