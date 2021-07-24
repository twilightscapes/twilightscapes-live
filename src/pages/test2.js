import * as React from "react"
import { Layout } from "../components/layout"
import GoBack from "../components/goBack"

import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"


// import Footer from '../../components/Footer'

import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'

import styled from "styled-components"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'

// import { FiZoomIn } from 'react-icons/fi'

// import Contact from '../../components/Contact-inc'

const CustomBox = styled.div`
.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}
.progress{position:absolute; top:80vh; left:100px; border:1px solid yellow; z-index:1;}
.slide:nth-child(1) {
  -webkit-animation: fade 24s 0s infinite;
  z-index:2;
}
.slide:nth-child(2) {
  -webkit-animation: fade 24s 6s infinite;
  z-index:1;
}
.slide:nth-child(3) {
  -webkit-animation: fade 0s 0s infinite;
  z-index:0;
}
.slider{z-index:-1;}
//  SLIDE
#vidpop {
  display: block;
  text-align:center;
}
label + input[type=checkbox]{
display:none !important;
} 
 
input[type=checkbox]:checked + label div{
  transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
  z-index:1;
} 
input[type=checkbox]:checked + label div label{display:block !important; cursor:pointer;}
#vid-toggle:checked + #vidpop .sub{display:none !important;}
#vid-open{
  position:absolute; bottom:0; display:block; width:100%; height:100%;  z-index:1; cursor:pointer;
  // background:#fff;
}
.container2 {
	overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height:60vh;
}
section {
	scroll-snap-align: start;
  border-bottom:10px solid #222!important;
  overflow:hidden;
  height:60vh;
  background:tranparent !important;
  // width:90%;
  // margin:0 auto;
}
.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:60vh;
  display:block;
  background-size:cover;
  min-height:60vh;
  // z-index:3 !important;
}
a.button2{
   display:inline-block;
   padding:.5em 3vw;
   border:0.16em solid #FFFFFF;
  border-radius:6px;
   margin:0 auto;
   box-sizing: border-box;
  box-shadow: 0px 1px 6px 1px black;
   text-decoration:none;
   text-transform:uppercase;
  text-shadow: 1px 4px 1px black;
   font-weight:400;
   color:#FFFFFF;
   text-align:center;
  background:#333;
  filter: brightness(120%);
  opacity:.9;
   transition: all 0.15s;
  }
  a.button2:hover{
   color:#DDDDDD;
   border-color:#FA02B7;
  filter: brightness(140%);
  }
  a.button2:active{
   color:#BBBBBB;
   border-color:#BBBBBB;
  }
  @media all and (max-width:30vw){
   a.button2{
    display:block;
    margin:0.4em auto;
   }
  }
.touchup{color:#ccc !important}
`






const CaseStudyVertIndex = () => (
  <Layout>
   <CustomBox>


  

  <h1 style={{textAlign:'center', marginTop:'100px', fontSize:'140%'}}>Galleries</h1>



      
<div className="container2" style={{position:'', height:'60vh', display:'', border:'5px solid ', margin:'3vh 6vw 0 6vw', borderRadius:'12px', boxShadow:'0 2px 3px 1px #777', transition:'background 0.3s ease-in'}}>




 


    
<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>



<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0'}}><Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>
      
        
 




      
    </div>
  </div>
  
  <StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="featured-imaged" />
{/* 
<StaticImage style={{zIndex:'0', position:'fixed'}} className="slider1" alt="" src="../img/favorites/night165.jpg" /> */}




  </section>
{/* END Panel 1 */}




<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>


<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>

        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-pediatric-center/">The Pediatrics Center<br /> View the case study</Link></h1>

    </div>
  </div>
  

  
  <StaticImage src="../img/favorites/night225.jpg" alt="Twilightscapes" className="featured-imaged" />





  </section>
{/* END Panel 2 */}





<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>
      
        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-jcedf/
">Jackson Co. Economic Development<br /> View the case study</Link></h1>
        
    </div>
  </div>
  

  

<StaticImage src="../img/favorites/night229.jpg" alt="Twilightscapes" className="featured-imaged" />

  </section>






  <section className="child" style={{position:'relative', height:'60vh', overflow:''}}>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{ position:'', textAlign:'center'}}>
      
        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-gccfcu/
">Gulf Coast Community Federal Credit Union<br /> View the case study</Link></h1>
        
    </div>
  </div>
  

  

<StaticImage src="../img/favorites/night244.jpg" alt="Twilightscapes" className="featured-imaged" />

  </section>
{/* END Panel 3 */}

<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>



<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>

        
 




      
    </div>
  </div>
  



<StaticImage src="../img/favorites/night283.jpg" alt="Twilightscapes" className="featured-imaged" />



  </section>
{/* END Panel 1 */}



<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>



<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>

        
 




      
    </div>
  </div>
  




<StaticImage src="../img/favorites/night303.jpg" alt="Twilightscapes" className="featured-imaged" />




  </section>
{/* END Panel 1 */}



<section className="child" style={{position:'relative', height:'60vh', overflow:''}}>



<div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'60vh', position:'absolute', zIndex:'1' }}>
      <div style={{alignSelf: 'flex-center', position:'', textAlign:'center'}}>
        <h1 style={{fontSize:'100%'}}><Link className="button2" to="/case-studies/casestudy-pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1>

        
 



   

      
    </div>
  </div>
  



<StaticImage src="../img/favorites/night307.jpg" alt="Twilightscapes" className="featured-imaged" />


  </section>
{/* END Panel 1 */}






{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}


{/* <Footer /> */}


</div>


</CustomBox>
  </Layout>
)
export default CaseStudyVertIndex