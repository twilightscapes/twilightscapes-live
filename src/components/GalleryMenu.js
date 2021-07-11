/** @jsx jsx */
// import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
import { jsx } from "theme-ui"
import { FaLock } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import {  RiArrowRightSLine } from "react-icons/ri"

const CustomBox = styled.div`




`



   
const GalleryMenu = () => (

<CustomBox style={{}}>

<div className="outer intro" style={{backgroundColor:'', borderTop:'0px solid #000',}}>
      <div className="container1 content" style={{padding:'0 0 10px 0',}}>
    
{/* <h2 style={{textAlign:'center', fontSize:'80%', margin:'0', padding:'0 0 5px 0', color:'#ddd',}}>Available Galleries <span className="no-app" style={{fontSize:'90%',}}><FaLock /> ( requires free<Link to="/install"> app installation here</Link> )</span></h2> */}


      
      
      
      
      
      
      
      
      
      
      <ul className="galmenu custom-gal" style={{margin:'0 !important',}}>

      <li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Themed Galleries</li>

   
      
      <li className="galmenu-item">
      <Link
      className="button"
      to="/favorites/"
      sx={{
        variant: "variants.button",
      }}
      title="Popular Favorites Gallery"
    >
      Popular Favorites
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>
     
      
      <li className="galmenu-item">
      <Link
      className="button"
      to="/cars/"
      sx={{
        variant: "variants.button",
      }}
      title="See All Cars Gallery"
    >
      Rusty Relics
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>

      
      <li className="galmenu-item">
      <Link
      className="button"
      to="/ghosttowns/"
      sx={{
        variant: "variants.button",
      }}
      title="Ghost Towns Gallery"
    >
      Ghost Towns
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>



      

	  
      
      
      
      
      
      



      </ul>


      {/* <h4 style={{display:'', textAlign:'center', fontSize:'70%', color:'#ddd',}}>Full Library:</h4> */}
      <br /> <br />
      <ul className="galmenu">
      {/* <li style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 1rem', borderRight:'1px dotted #666', margin:'0 1rem 1rem 0',}}>Bonus Galleries</li> */}

      <li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Bonus Galleries</li>


      <li className="galmenu-item"><Link to="/gallery1/" className="button" sx={{variant: "variants.button",}} title="Gallery 1" id="gallery1">I</Link></li>
      <li className="galmenu-item"><Link to="/gallery2/" className="button" sx={{variant: "variants.button",}}  title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/gallery3/" className="button" sx={{variant: "variants.button",}}  title="Gallery 3">III</Link></li>

      </ul>

</div>
      </div>

</CustomBox>
  
)

export default GalleryMenu