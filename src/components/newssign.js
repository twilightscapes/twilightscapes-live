
import * as React from "react"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

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


const NewsletterPage = () => (


<CustomBox style={{}}> 

           <div className="contact-form" style={{ padding:'0', textAlign:'center', color:'#fff', margin:'10% auto 0 auto', justifySelf:'center', width:'90%'}}>
<form
          className="news-form"
          action="/signedup/"
          name="ts-news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">



              

          <input type="hidden" name="form-name" value="news" />

<br />

            
              <span className="txtshadow" style={{fontSize:'120%',}}><strong>Follow Me Into The Night</strong></span><br />
              
              <span className="txtshadow" style={{fontSize:'85%'}}>night photography newsletter<br />(it's free!)</span><br /><br />

             <div className="signbox" style={{display:'flex',}}>
<div className="blocker" style={{width:'90%', height:'100%', borderRadius:'12px', margin:'0 auto'}}></div>
               <label style={{color:'#fff'}} htmlFor="email">
                 <input type="email" name="email" required={true}
                      placeholder="your@email.com"
                      style={{}}/></label>
                      
            


  

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
            <button
              className="button"
              
              type="submit"
              style={{marginTop:'-8px', fontSize:'clamp(1rem, 1.5vw, 1.5rem)', whiteSpace:'nowrap'}}
            >
              Follow Todd{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>


            </div>


            <div style={{fontSize: '70%', padding: '0px 3%', margin:'30px 0 10px 0', textAlign: 'center', color:'#ccc'}}>
            <Link to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>privacy policy (NO SPAM!)</Link>
           
            </div>
<br /></form>
</div>

        
        
</CustomBox>
  
)

  export default NewsletterPage