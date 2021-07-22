
import * as React from "react"
import styled from "styled-components";
import { Link } from 'gatsby'

// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import {  RiArrowRightSLine } from "react-icons/ri"

const CustomBox = styled.div`

.themed{margin-top:20px;}





.themed{margin-top:10px;}

  .themed .button {
    --padding: 15px;
    --margin: 20px;
    display: flex;
    // align-items: flex-start;
    padding: var(--padding) calc(var(--padding) * 1);
    border-radius: 12px;
    text-decoration: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    font-size: 16px;
    line-height: 1;
    transition: background 0.3s linear;
    }


  .fullarchive .button {
    --padding: 15px;
    --margin: 10px;
    display: flex;
    // align-items: flex-start;
    padding: var(--padding) calc(var(--padding) * 1);
    border-radius: 12px;
    // width:20px;
    // padding:14px;
    text-decoration: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    font-size: 16px;
    text-align:left;
    line-height: 1;
    transition: background 0.3s linear;
    }
  


`



   
const GalleryMenu = () => (

<CustomBox style={{}}>

{/* <div className="outer intro" style={{backgroundColor:'', borderTop:'0px solid #000',}}>
      <div className="container1 content" style={{padding:'0 0 10px 0',}}> */}
    
{/* <h2 style={{textAlign:'center', fontSize:'80%', margin:'0', padding:'0 0 5px 0', color:'#ddd',}}>Available Galleries <span className="no-app" style={{fontSize:'90%',}}><FaLock /> ( requires free<Link to="/install"> app installation here</Link> )</span></h2> */}


      
      
      
      
      
      
      
      
      
      
      <ul className="galmenu custom-gal" style={{margin:'0 !important',}}>

      <li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Themed Galleries</li>

   
      
      <li className="galmenu-item">
     
<Link to="/photos/milky-way"
className="button"
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Milky Way
</Link>
      </li>
     

      <li className="galmenu-item">
      <Link to="/photos/crazy-geology"
className="button"
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Crazy Geology
</Link>
      </li>
      
      <li className="galmenu-item">
      <Link to="/photos/in-the-city"
className="button"
style={{
cursor:'pointer',
textAlign:'center',
margin:'1rem auto',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  In The City
</Link>
      </li>

      
      {/* <li className="galmenu-item">
      <Link
      className="button"
      to="/vault/ghosttowns/"
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



      <li className="galmenu-item">
      <Link
      className="button"
      to="/vault/crazygeology/"
      sx={{
        variant: "variants.button",
      }}
      title="Crazy Geology Gallery"
    >
      Crazy Geology
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li>


      <li className="galmenu-item">
      <Link
      className="button"
      to="/vault/daylight/"
      sx={{
        variant: "variants.button",
      }}
      title="During Daytime Gallery"
    >
      Day Light
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
      </li> */}


	  
      
      
      
      
      
      
      
      {/* <li className="galmenu-item has-app"><Link to="/vault/daylight"  title="During Daylight">During<br />Daylight</Link></li>
      <li className="galmenu-item no-app"><Link to="/vault"  title="During Daylight">During<br />Daylight <FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      



      </ul>


 
      
  



</CustomBox>
  
)

export default GalleryMenu