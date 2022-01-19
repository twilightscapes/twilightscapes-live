
import * as React from "react"
import styled from "styled-components";
import { Link } from 'gatsby'
import Select from "react-select"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'
import {  RiArrowRightSLine } from "react-icons/ri"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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


const options = [
  { value: "http://www.cnet.com", label: "Apple" },
  { value: "http://www.geocities.com", label: "Orange" },
  { value: "http://www.cnn.com", label: "Grape" }
]

// function go(){
//   const location=
//   document.example.
//   options[document.example.selectedIndex].value
//   }
   

  function go(){
    // bind change event to select
    // '#dynamic_select'.on('change', 
    
    // function () {
        const url = (this).val(); // get selected value

        if (url) { // require a URL
            window.location = url; // redirect
        }

        return false;
    // });

  };


const GalleryMenu = () => (

<CustomBox style={{}}>

{/* <div className="outer intro" style={{backgroundColor:'', borderTop:'0px solid #000',}}>
      <div className="container1 content" style={{padding:'0 0 10px 0',}}> */}
    
{/* <h2 style={{textAlign:'center', fontSize:'80%', margin:'0', padding:'0 0 5px 0', color:'#ddd',}}>Available Galleries <span className="no-app" style={{fontSize:'90%',}}><FaLock /> ( requires free<Link to="/install"> app installation here</Link> )</span></h2> */}


      
     {/* <div name="George"> 
<Select name="example" options={options} />
      </div> */}
      

      {/* <select id="dynamic_select">
  <option value="" selected>Pick a Website</option>
  <option value="http://www.google.com">Google</option>
  <option value="http://www.youtube.com">YouTube</option>
  <option value="https://www.gurustop.net">GuruStop.NET</option>
</select> */}



  <Tabs forceRenderTabPanel defaultIndex={1}>

    <TabList style={{justifyContent:'space-around'}}>
      <Tab>Themed Galleries</Tab>
      <Tab>Full Archives</Tab>
    </TabList>

    
    <TabPanel style={{flexBasis:'50px', justifyContent:'space-around'}}>
      <Tabs forceRenderTabPanel>
        <TabList>

          <Tab>
            <Link to="/photos/milky-way"
className=""
style={{
cursor:'pointer',
textAlign:'center',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Milky Way
</Link></Tab>

          <Tab><Link to="/photos/cars"
className=""
style={{
cursor:'pointer',
textAlign:'center',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Cars
</Link></Tab>
          <Tab><Link to="/photos/dendroiddreams"
className=""
style={{
cursor:'pointer',
textAlign:'center',
alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Dendroid Dreams
</Link></Tab>
          <Tab><Link
      to="/photos/ghosttowns/"
      className=""
      title="Ghost Towns Gallery"
    >
      Ghost Towns
    </Link></Tab>
          <Tab><Link
      to="/photos/crazy-geology/"
      className=""
      title="Crazy Geology Gallery"
    >
      Crazy Geology
    </Link></Tab>
    <Tab><Link
      to="/photos/gasstations/"
      className=""
      title="Gas Station Gallery"
    >
      Gas Stations
    </Link></Tab>
    <Tab><Link
      to="/photos/daylight/"
      className=""
      title="During Daytime Gallery"
    >
      Day Light
    </Link></Tab>

    {/* <Tab><Link
      to="/photos/churches/"
      className=""
      title="During Daytime Gallery"
    >
      Churches
    </Link></Tab> */}

        </TabList>
         <TabPanel>
          {/* <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p> */}
        </TabPanel>

      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>

          <Tab><Link to="/photos/gallery1/" className=""  title="Gallery 1" >I</Link></Tab>

          <Tab><Link to="/photos/gallery2/" className=""   title="Gallery 2">II</Link></Tab>

          <Tab><Link to="/photos/gallery3/" className=""   title="Gallery 3">III</Link></Tab>
          
          <Tab><Link to="/photos/gallery4/" className=""   title="Gallery 4">IV</Link></Tab>

          <Tab><Link to="/photos/gallery5/" className=""   title="Gallery 5">V</Link></Tab>

          <Tab><Link to="/photos/gallery6/" className=""   title="Gallery 6">VI</Link></Tab>
          
          <Tab><Link to="/photos/gallery7/" className=""   title="Gallery 7">VII</Link></Tab>
          
          <Tab><Link to="/photos/gallery8/" className=""   title="Gallery 8">VIII</Link></Tab>
          
          <Tab><Link to="/photos/gallery9/" className=""   title="Gallery 9">IV</Link></Tab>



        </TabList>
  
        <TabPanel>
          {/* <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p> */}
        </TabPanel>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        </TabPanel> 
      </Tabs>
    </TabPanel>
  </Tabs>

      
      
      <div style={{display:'none'}}>
      
      
      <ul className="galmenu custom-gal" style={{margin:'0 auto 0 auto', padding:'1%'}}>

      <li className="mobilehide" style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0', fontWeight:'bold'}}>Themed Galleries</li>

   
      {/* <li className="galmenu-item">
     
     <Link to="/photos/churches"
     className=""
     style={{
     cursor:'pointer',
     textAlign:'center',
     
     alignItems:'center',
     display: 'flex',
     justifyContent: 'center',
     fontSize:'100%',
     }}>
       Churches
     </Link>
           </li> */}

      
      <li className="galmenu-item">
     
<Link to="/photos/milky-way"
className=""
style={{
cursor:'pointer',
textAlign:'center',

alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Milky Way
</Link>
      </li>
     


      
      <li className="galmenu-item">
      <Link to="/photos/cars"
className=""
style={{
cursor:'pointer',
textAlign:'center',

alignItems:'center',
display: 'flex',
justifyContent: 'center',
fontSize:'100%',
}}>
  Cars
</Link>
      </li>


      <li className="galmenu-item">
      <Link to="/photos/dendroiddreams"
className=""
style={{
cursor:'pointer',
textAlign:'center',

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
      className=""
      to="/photos/ghosttowns/"
      sx={{
        variant: "variants.button",
      }}
      title="Ghost Towns Gallery"
    >
      Ghost Towns
    </Link>
      </li>

      <li className="galmenu-item">
      <Link
      className=""
      to="/photos/crazy-geology/"
      sx={{
        variant: "variants.button",
      }}
      title="Crazy Geology Gallery"
    >
      Crazy Geology
    </Link>
      </li>

      <li className="galmenu-item">
      <Link
      className=""
      to="/photos/gasstations/"
      sx={{
        variant: "variants.button",
      }}
      title="Gas Station Gallery"
    >
      Gas Stations
    </Link>
      </li>


      <li className="galmenu-item">
      <Link
      className=""
      to="/photos/daylight/"
      sx={{
        variant: "variants.button",
      }}
      title="During Daytime Gallery"
    >
      Day Light
    </Link>
      </li>


	  
      
      
      
      
      
      
      
      {/* <li className="galmenu-item has-app"><Link to="/photos/daylight"  title="During Daylight">During<br />Daylight</Link></li>
      <li className="galmenu-item no-app"><Link to="/photos"  title="During Daylight">During<br />Daylight <FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      



      </ul>





      <ul className="galmenu fullarchive masonry" style={{borderTop:'2px dotted #222', padding:'2%'}}>
      {/* <li style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 1rem', borderRight:'1px dotted #666', margin:'0 1rem 1rem 0',}}>Bonus Galleries</li> */}

      <li className="mobilehide" style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 20px 5px 0', fontWeight:'bold'}}>Full Archives</li>


      <li className="galmenu-item"><Link to="/photos/gallery1/" className=""  title="Gallery 1" >I</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery2/" className=""   title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery3/" className=""   title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery4/" className=""   title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery5/" className=""   title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery6/" className=""   title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery7/" className=""   title="Gallery 7">VII</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery8/" className=""   title="Gallery 8">VIII</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery9/" className=""   title="Gallery 9">IV</Link></li>
      {/* <li className="galmenu-item1"><Link to="/gallery10/"  title="Gallery 10">X</Link></li> */}
      
      {/* <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 8">VIII<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 9">IV<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li>
      <li className="galmenu-item no-app"><Link to="/install"  title="Gallery 10">X<FaLock  style={{position:'absolute', top:'0', right:'0', color:'#aaa',}} className="lock" /></Link></li> */}
      
      
      {/* <li className="galmenu-item has-app" has-app><Link to="/photos/gallery8"  title="Gallery 8" has-app>VIII</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/photos/gallery9"  title="Gallery 9">IX</Link></li>
      <li className="galmenu-item has-app" has-app><Link to="/photos/gallery10"  title="Gallery 10">X</Link></li> */}
      </ul>
 
      
      </div>



</CustomBox>
  
)

export default GalleryMenu