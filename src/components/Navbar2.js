import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/tw-logo-white.svg'
// import Headroom from "react-headroom"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'
// import { GoArrowUp } from 'react-icons/go';
// import { WiDaySunny } from 'react-icons/wi';
// import Image from './Image'
import Theme from "../components/theme"
// import PopContact from './PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'
const CustomBox = styled.div`




}


.header1 {
    display: none;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    // background-color: #FC466B;
    position: fixed;
    height: 60px!important;
    overflow: hidden;
    z-index: 1;
}

`

const Navbar2 = class extends React.Component {
  
/* eslint-disable */

  render() {
    return (
	    
      <CustomBox>         







 
   <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  {/* <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span> */}
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

   <div id="sidebarMenu">


  

   <div style={{position:'relative', margin:'20px'}}><Theme  /></div>

    <ul className="sidebarMenuInner">
      {/* <li>Todd Lambert <span>Web Developer</span></li> */}
      <li>
              <Link className="navbar-item txtshadow" to="../">
                Home <span>Return to home</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/galleries/">
                Galleries <span>View Photos</span>
              </Link>
      </li>

      <li>
              <Link className="navbar-item txtshadow" to="/about/">
                About Twilightscapes <span>Meet Todd Lambert</span>
              </Link>
      </li>


      <li>
      <Link id="portfolio" className="navbar-item txtshadow" to="/gear/">Gear Talk<span>All the technical details</span></Link>
       </li>

       <li>
              <Link className="navbar-item txtshadow" to="/contact/">
                Contact <span>Ask me anything!</span>
              </Link>
      </li>

       


       {/* <li>
              <Link id="casestudies" className="navbar-item txtshadow" to="/case-study/">
                How We Do it <span>Go behind the curtains</span>
              </Link>
      </li> */}

    

      {/* <li>
              <Link className="navbar-item txtshadow" to="/blog/">
                What We're Up To <span>View our blog</span>
              </Link>
      </li> */}

      {/* <li>
             <label className="modal-btn txtshadow" htmlFor="modal-toggle" style={{textShadow: '1px 2px 0px black',}}>Contact </label> 
      </li> */}

    </ul>
  </div>
            {/* <PopContact /> */}
            
      
      
   
   
    
      
      
      {/* <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a> */}
      

</CustomBox>
      
      
    )
  }
}

export default Navbar2