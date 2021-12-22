
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


      
      
      
      
      
      
      
      
      
      
      <ul className="galmenu custom-gal" style={{margin:'0 auto !important', width:'90%'}}>

      <li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Themed Galleries</li>

   
      <li className="galmenu-item">
     
     <Link to="/vault/favorites"
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
       Favorites
     </Link>
           </li>

      
      <li className="galmenu-item">
     
<Link to="/vault/milky-way"
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
      <Link to="/vault/cars"
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
  Cars
</Link>
      </li>


      <li className="galmenu-item">
      <Link to="/vault/dendroiddreams"
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
  Dendroid Dreams
</Link>
      </li>



      
      <li className="galmenu-item">
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
      to="/vault/gasstations/"
      sx={{
        variant: "variants.button",
      }}
      title="Gas Station Gallery"
    >
      Gas Stations
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
      </li>


	  
      
      
      
      
      
      
      
      {/* <li className="galmenu-item has-app"><Link to="/vault/daylight"  title="During Daylight">During<br />Daylight</Link></li>
      <li className="galmenu-item no-app"><Link to="/vault"  title="During Daylight">During<br />Daylight <FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      



      </ul>




      <br />
      <ul className="galmenu fullarchive">
      {/* <li style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 1rem', borderRight:'1px dotted #666', margin:'0 1rem 1rem 0',}}>Bonus Galleries</li> */}

      <li style={{width:'', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 20px 5px 0',}}>Full Archives</li>


      <li className="galmenu-item"><Link to="/vault/gallery1/" className="button" sx={{variant: "variants.button",}} title="Gallery 1" >I</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery2/" className="button" sx={{variant: "variants.button",}}  title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery3/" className="button" sx={{variant: "variants.button",}}  title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery4/" className="button" sx={{variant: "variants.button",}}  title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery5/" className="button" sx={{variant: "variants.button",}}  title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery6/" className="button" sx={{variant: "variants.button",}}  title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery7/" className="button" sx={{variant: "variants.button",}}  title="Gallery 7">VII</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery8/" className="button" sx={{variant: "variants.button",}}  title="Gallery 8">VIII</Link></li>
      <li className="galmenu-item"><Link to="/vault/gallery9/" className="button" sx={{variant: "variants.button",}}  title="Gallery 9">IV</Link></li>
      {/* <li className="galmenu-item1"><Link to="/gallery10/"  title="Gallery 10">X</Link></li> */}
      
      {/* <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 8">VIII<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 9">IV<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 10">X<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      
      
      {/* <li className="galmenu-item has-app" has-app><Link to="/vault/gallery8"  title="Gallery 8" has-app>VIII</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery9"  title="Gallery 9">IX</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/vault/gallery10"  title="Gallery 10">X</Link></li> */}
      </ul>
 
      
  



</CustomBox>
  
)

export default GalleryMenu