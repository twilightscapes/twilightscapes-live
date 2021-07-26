
import * as React from "react"
import { Link } from 'gatsby-plugin-modal-routing-3'
import styled from "styled-components";
import twLogo from "../../static/assets/tw-logo-white.svg"
import { CartButton } from "./cart-button"
import SearchIcon from "../../static/assets/search"
import Theme from "../components/theme"
const CustomBox = styled.div`
#installer {
  animation: cssAnimation 0s 1s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`



const Menu = () => (



  
 

    <CustomBox style={{}} className="menu">


<header>

      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span>
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>


  

   <div id="sidebarMenu">

<div className="has-app promocode">
30% OFF CODE: <span style={{color:'#FA02B7', fontWeight:'bold'}}>LoveTheNight</span>
</div>


<ul className="sidebarMenuInner">

 <li style={{border:'none', marginBottom:'1rem'}}>
<Link to="/"><img id="logo" className="twlogo" src={twLogo} alt="Twilightscapes Logo" title="Return To Homepage" style={{minWidth:'100px', maxWidth:'165px',}} /></Link>
 </li>





      <li className="carto blanca">
              <Link state={{modal: true}} className="navbar-item txtshadow" to="/contact/">
                Contact Me<span>Ask me anything!</span>
              </Link>
      </li>


      <li className="carto">
      <Link className="navbar-item txtshadow" to="/gear/">Gear Talk<span>What tools I use</span></Link>
       </li>


      <li className="carto">
              <Link className="navbar-item txtshadow" to="/about/">
                About Me <span>Learn All About Me</span>
              </Link>
      </li>


      <li className="carto">
              <Link className="navbar-item txtshadow" to="/nft/">
                NFT Collectibles <span>Limited Editions</span>
              </Link>
      </li>


      <li className="carto">
              <Link className="navbar-item txtshadow" to="/vault/favorites/">
              The Vault <span>Full Photo archives</span>
              </Link>
      </li>



      <li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/gallery">
      
              View Photos <span style={{color:'var(--primary-color)',}}>start here</span>
              </Link>
      </li> 

      <li><Theme  /></li>
    
      

      <li className="carto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center' }}>
  
   <Link to="/search" style={{marginRight:'20px', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link>
  <div className="carto"><CartButton /></div>


        </li>

    

    </ul>

 {/* <div className="has-app promocode">
30% OFF CODE: <span style={{color:'#FA02B7', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}




  </div>











 




     


     

</header>

</CustomBox>
)

export default Menu