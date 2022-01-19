
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

<div style={{background: 'linear-gradient(-180deg, rgb(8, 8, 8) 0%, rgb(20, 20, 20) 100%)',  borderRadius:'0 0 12px 12px',
//  filter:'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))', 
 width:'96%', margin:'0 auto', textShadow:'1px 1px 0 #000',
 color:'#fff',
 border:'3px solid #222',
 borderTop:'0px solid #111111', 
 zIndex:'1', display:''}}>

  <Tabs >

    <TabList style={{justifyContent:'space-around'}}>
      <Tab style={{textDecoration:'underline', marginTop:'1rem'}}>Themed Galleries</Tab>
      <Tab style={{textDecoration:'underline', marginTop:'1rem'}}>View Full Archives</Tab>
    </TabList>

    
    <TabPanel>
      <Tabs>
        <TabList style={{display:'flex', flexBasis:'shrink',  justifyContent:'space-around'}}>

          <Tab>
            <Link to="/photos/milky-way"
className="">
  Milky Way
</Link></Tab>

          <Tab><Link to="/photos/cars"
className=""
>
  Cars
</Link></Tab>
          <Tab><Link to="/photos/dendroiddreams"
className=""
>
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
    <Tab style={{alignSelf:''}}><Link
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
         {/* <TabPanel>
          <p style={{textAlign:'center'}}>Galleries based on selected subject matter</p>
        </TabPanel> */}

      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs>
        <TabList style={{flexBasis:'', justifyContent:'space-around'}}>

          <Tab><Link to="/photos/gallery1-h/" className=""  title="Gallery 1" style={{flexShrink:'0'}} >I</Link></Tab>

          <Tab><Link to="/photos/gallery2-h/" className=""   title="Gallery 2">II</Link></Tab>

          <Tab><Link to="/photos/gallery3-h/" className=""   title="Gallery 3">III</Link></Tab>
          
          <Tab><Link to="/photos/gallery4-h/" className=""   title="Gallery 4">IV</Link></Tab>

          <Tab><Link to="/photos/gallery5-h/" className=""   title="Gallery 5">V</Link></Tab>

          <Tab><Link to="/photos/gallery6-h/" className=""   title="Gallery 6">VI</Link></Tab>
          
          <Tab><Link to="/photos/gallery7-h/" className=""   title="Gallery 7">VII</Link></Tab>
          
          <Tab><Link to="/photos/gallery8-h/" className=""   title="Gallery 8">VIII</Link></Tab>
          
          <Tab><Link to="/photos/gallery9-h/" className=""   title="Gallery 9">IV</Link></Tab>



        </TabList>
  
        {/* <TabPanel>
          <p style={{textAlign:'center'}}>View The Full Twilightscapes Archive</p>
        </TabPanel> */}

      </Tabs>
    </TabPanel>
  </Tabs>

      </div>
      
      



</CustomBox>
  
)

export default GalleryMenu