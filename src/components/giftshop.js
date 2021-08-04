
import * as React from "react"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"
import { FaHandPointRight } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

input::placeholder {
  color: #fff !important;
  filter: drop-shadow(0px 0px 6px var(--primary-color));
}







    @media (max-width: 58em) {


      .signbox input{margin-bottom:10px; margin-right:20px;}

    }


}

`


const GiftShopPage = () => (


<CustomBox style={{}}>
<form
          className="news-form"
          // action="/signedup/"
          name="ts-news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field" style={{display:'flex', justifyContent:'center'}}>

            <div className="contact-form" style={{ padding:'0', textAlign:'center', color:'#fff', margin:'0 auto', justifySelf:'center', width:'', overflow:'hidden'}}>

              <div className="blocker" style={{width:'', height:'100%', borderRadius:'12px'}}></div>

          <input type="hidden" name="form-name" value="news" />

<br />

            
              <span style={{fontSize:'90%', padding:'0'}}><strong>Thank you for viewing!</strong></span><br />
              
              


              <ScrollAnimation animateIn="bounce" duration={1}  initiallyVisible={true} animateOnce={false} animatePreScroll={true} >
<FaHandPointRight className="bounce" style={{fontSize:'40px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>



             <div className="signbox" style={{display:'flex',}}>

               {/* <label style={{color:'#fff'}} htmlFor="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{}}/></label> */}
                      
            


  

            {/* <button
              className="button"
              type="submit"
      
            >
              <span style={{}}>Follow Todd</span> {" "}
              <span className="icon -right" style={{paddingLeft:'.5rem'}}>
                <RiSendPlane2Line />
              </span>
            </button> */}
&nbsp;&nbsp;
            {/* <button
              className="button"
              
              type="submit"
              style={{marginTop:'-8px'}}
            >
              Follow Todd{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button> */}


            </div>


            <div style={{fontSize: '100%', padding: '0px 3%', margin:'30px 0 10px 0', textAlign: 'center', color:'#ccc'}}>
            {/* <Link to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>privacy policy (NO SPAM!)</Link> */}

            PLEASE EXIT THROUGH GIFT SHOP
           

<br /><br />
<span style={{fontSize:'100%'}}>Be sure to sign the guest book!</span><br /><br />

            </div>
<br />
</div>

        </form>
        
</CustomBox>
  
)

  export default GiftShopPage