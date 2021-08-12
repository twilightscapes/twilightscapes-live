import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

export default class Installer extends React.Component {

  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }

   render(){
       return(
           <div className="no-app">
           <div style={{textAlign:'center', }}>
           <button onClick={this.handleShow} style={{borderBottom:'1px solid'}}>Install the Web App</button> - Get 30% OFF!
             
             
             </div>

{this.state.isActive ? 
<>
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'0px solid #333', borderRadius:'12px', maxWidth:'70vw' }}>
  
One-Click Install - NO APP STORE NEEDED
<div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.60)', position:'relative', color:'#fff'}}>
      
<button onClick={this.handleHide} style={{position:'absolute', right:'10px', top:'10px', fontSize:'24px'}}><AiOutlineCloseCircle /></button>

Simply click the "install" icon on the right-side of your browser address bar



  <span style={{fontSize:'80%'}}>For Apple iOS users:</span>
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'0px solid #333', borderRadius:'12px', }}>
    
    <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
   <IoShareOutline style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
    1) Press the 'Share' button 
  </div>
  
   <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
   <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
   
  2) Press 'Add to Home Screen'
   </div>
   
   </div>

</div>
</div>
</>
  : null }
             
           </div>
)
}
}