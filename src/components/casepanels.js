import * as React from "react"
// import Layout from '../components/Layout'
// import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar'
// import GalleryMenu from '../../components/GalleryMenu'
import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from './Image'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import { MdPlayArrow } from 'react-icons/md'
import { IoMdFingerPrint } from 'react-icons/io'
import { RiSendPlane2Line } from "react-icons/ri"
// import DownArrow from './DownArrow'
// import { RiArrowDownCircleLine } from 'react-icons/ri'
// import TouchUp from './TouchUp'
// import PopContact from './PopContact'
// import Contact from '../../components/Contact-inc'
import BgImage from './BgImage'

// import Img1 from './Img1'
// import Img2 from './Img2'
// import Img3 from './Img3'
// import Img4 from './Img4'


const CustomBox = styled.div`

// caras



.panel-wrapper{
  margin: 0 ;
  width:100%;
  
}

.slidepanel{
  display:flex;
  flex-wrap:nowrap;
  // width:100vw;
  height:100vh;
  // height: calc(100vh - 88px);
  overflow:hidden;
}

.slidepanel > div{
  // min-width:16vw;
  width:50vw;
  flex-grow:1;
  flex-shrink:1;
  height:100%;
  // overflow:hidden;
  transition:all .5s ease;
  // border-left:1.5px solid ;
  // border-right:1.5px solid ;
  border-radius:0px;
  position:relative;
  align-items: center;
  justify-content: center;
}


.slidepanel > div:hover{
  flex-shrink:0
}

.slidepanel div img, .slidepanel div .gatsby-image-wrapper {
  width:100%;
  height:100vh ;
  object-fit: cover;
  position:fixed;
  z-index:-1;
  padding:0;
  margin:0;
  border:0px solid yellow;
  // background-position:bottom bottom;
  // object-position: 100% 100%;

}
// .slidepanel div  div  img{border:3px solid yellow;}
// .slidepanel div .gatsby-image-wrapper *{
//   border:3px solid yellow; width:100% !important;
// }


// .slidepanel div:hover::before { 
//   content: "Before -"; 
//   background-color: green; 
//   position:absolute;
//   z-index:1;
//   width:200px;
//   margin:0 auto;
// } 

.slidepanel a{
  z-index:0;
  align-items: center;
  justify-content: center;
  // border:1px solid white !important; 
  // animation: fadeIn;
}


.slidepanel div:hover a, .slidepanel div:hover .contentpanel{
  display:block;
  }
  .slidepanel div a, .slidepanel div .contentpanel{
  display:none;
  }

  .slidepanel div .headline {display:block; opacity:1;}
  .slidepanel div:hover .headline{display:none;}


  .outerpanel{}
  
  .innerpanel{
    display:flex;
    // alignItems:center;
    // justifyContent:center;
    width:100%;
    // height:auto;
    position:absolute;
    // top:25vh;
    z-index:0;
    margin:0 0 0 0;
height:100%;
    padding:0 0 0 0;
  }

 .contentpanel{
     display:block;
    //  border:1px solid #333;
    // border-radius:6px;
     margin:0 auto;
     padding:2rem 1rem;
     text-decoration:none;
    text-align:left;
    text-shadow: 1px 2px 1px black;
     font-weight:400;
     color:#FFFFFF;
    cursor:default;
    background: rgba(0,0,0,0.50);
     transition: all 0.15s;
    fontSize:100%;
    opacity:0;
    overflow-y:auto;
    backdrop-filter: blur(10px);
    width:100%;
    // height:84vh;
    height:100%;
    animation:fade 1.7s forwards;
    }

  

    // .contentpanel > *{opacity:0; animation:fade 3s forwards;}

    .headline{
      padding:1em;
     margin:0 auto;
    box-shadow: 0px 1px 6px 1px black;
    text-shadow: 1px 2px 1px black;
    background: rgba(250, 3, 196, 0.9);

    // filter: brightness(120%);
    font-size:100%;
    font-weight:0 !important; 
    position:absolute;
    bottom:25vh;
    color:#fff;
    width:100%;
    transition: all .6s ease-out;
    display:none !important;
    }

.button2{
   display:inline-block;
   padding:.5em 3vw;
   border:0.16em solid #FFFFFF;
  border-radius:6px;
   margin:1rem auto;
   box-sizing: border-box;
  box-shadow: 0px 1px 6px 1px black;
   text-decoration:none;
  text-shadow: 1px 2px 1px black;
   font-weight:400;
   color:#FFFFFF;
  background:#333;
  filter: brightness(120%);
  opacity:.9;
   transition: all 0.15s;
  }
  .button2:hover{
   color:#DDDDDD;
   border-color:#FA02B7;
  filter: brightness(140%);
  }

  .button2:active{
   color:#BBBBBB;
   border-color:#BBBBBB;
  }
  @media all and (max-width:30vw){
   .button2{
    display:block;
    margin:0.4em auto;
   }
}

@media (max-width: 48rem) {
  // .slidepanel > div{width:70%; border:0px solid red;}
  // .slidepanel > div:last-child{display:; width:50%}
  .headline{padding:4px; font-size:70%;}
  .contentpanel{
    padding:2rem 1rem;
    padding-top:12vh;
  }
  }
  @media (min-width: 48rem) {
  .contentpanel{
    padding:2rem 2rem;
    padding-top:18vh;
  }
  }
  
  @media (min-width: 1024px) {
    .contentpanel{
      padding:2rem 3rem;
      padding-top:18vh;
    }
    }

// .slidepanel > div:last-child{display:; width:50%}
// .slidepanel > div:nth-last-of-type(-n+2){width:50%}

 .gatsby-image-wrapper{position: initial !important;}





 .shout{width:100%; height:100vh; display:flex; display:; flex-direction:column;}
//  .shout span:first-child{}
 .shout span{
    width:100vw;
    height:20vh;
    animation-iteration-count: 1;
    animation-fill-mode: none;
    animation-play-state: running; 
  opacity:0;
  // border:1px solid blue;
  text-shadow: 0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0,0,0,.1),
  0 0 5px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25),
  0 10px 10px rgba(0,0,0,.2),
  0 20px 20px rgba(0,0,0,.15);
    }




    @keyframes poptop {
      0%{
            opacity: 0;
            // transform: translateY(-100vh)
         }
         50%{
          opacity: .8;
          transform: translateY(0)
       }

         100% {
            opacity:0;
            transform: translateY(0)

         }
      
      }


      @keyframes tagline {
        0%{
          opacity: 0;
          // transform: translateY(-100vh)
       }
       50%{
        opacity: .8;
        transform: translateY(0)
     }

       100% {
          opacity:.8;
          transform: translateY(0)

       }
          }


    @keyframes tooltop{
        0% { opacity: 0; transform: scale(1.3) }
        5% { opacity: 0;}
        10% { opacity: .3; -webkit-transform: translateX(0px); }
        25% { opacity: .4; -webkit-transform: translateX(0px); }
        30% { opacity: .5;  transform: scale(.9) translate(1px); }
        80% { opacity: 1; transform: scale(1) translate(0px); }
        100% { opacity: 0; }
    }

    @media (hover: hover) {
      .touchindicator{display: none !important;}
      }

`

const CaseStudyPanels = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden'}}>
    



<div className="shout" style={{position:'absolute', top:'5vh',}}>

<span style={{position:'absolute', top:'29vh', textAlign:'center', fontSize:'17vw', animation:'poptop 5s forwards', animationDelay:'0s'}}>Case Studies</span>

</div>

  <div className="slidepanel">
  




  <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline">Case 1 <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards', opacity:'0'}}/></span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{}}>
          
          


{/* <div style={{maxWidth:'200px', overflow:'hidden'}}><a href="https://foundation.app/@twilightscapes/stellar-sentries-51674" target="_blank" rel="noopener noreferrer nofollow"><StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="featured-imaged" /></a></div> */}
          
          <h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Stellar Sentries</h2>

          <p>A very rare night photo of the Very Large Array (VLA). I'd always been intrigued by this place and I'd wanted to visit it. These towers are like nimble giants, constantly twitching and positioning and working tirelessly throughout the night.</p>

<p>After having obtained special permission to be on the premises after dark by way of a favor, I was able to get the perfect lineup framed and then waited for the skies to darken and the stars to come out.</p>

<p>Single Shot - No PS - lightpainted long exposure</p>


<a
              className="button"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href="https://foundation.app/@twilightscapes/stellar-sentries-51674"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>
  
        {/* <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'80%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/pavandbroome/">Pav &amp; Broome<br /> View the case study</Link></h1> */}

        </div>
    </div>
    <BgImage filename="night235.jpg" />
 </div>



  <div className="outerpanel" style={{borderLeft:'', paddingTop:''}}>
  {/* <img src="https://source.unsplash.com/random/1200x12001" alt="rando" /> */}
 <span className="headline">Case 2 <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
 <div className="innerpanel" style={{}}>

     

          <div className="contentpanel" style={{}}>
          
          

          <strong style={{fontSize:'130%'}}>The Pediatric Center</strong><br />
          <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque nisi, tincidunt nec urna eget, egestas viverra dolor. Sed lobortis justo quis mi porttitor ultricies. Quisque turpis est, elementum ac interdum at.</p>
        
          <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing Sed a turpis eu augue lacinia vehicula. Ut nisl sapie.</p>

       
        {/* <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'50%', margin:'0 auto'}}><label className="modal-btn0 button2" htmlFor="modal-toggle" style={{ textAlign:'center', cursor:'pointer',}}>Let's Get Started!</label> </h1> */}


        <h1 style={{fontSize:'100%', textAlign:'center', maxWidth:'80%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/pediatric-center/">The Pediatric Center<br /> View the case study</Link></h1>


        </div>
    </div>
    <BgImage filename="night216.jpg" />
    {/* <Img2 /> */}
    {/* <Image alt="Temp Graphic" filename="homebanner-pb.jpg" /> */}
    {/* <BackgroundImg /> */}
 </div>

 


 <div className="outerpanel" style={{borderLeft:''}}>

<span className="headline">Case 3 <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Humane Society of South Mississippi</strong><br />
          <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque nisi, tincidunt nec urna eget.</p>
        
        <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing Sed a turpis eu augue lacinia vehicula. Ut nisl sapie.</p>
        
        


         <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'90%', margin:'1rem auto 0 auto'}}><Link className="button" to="/case-study/hssm/">Humane Society of South Mississippi<br /> View the case study</Link></h1>



        </div>
    </div>
    <BgImage filename="night165.jpg" />
 </div>


{/* 
 <div className="outerpanel" style={{borderRight:'none'}}>


<span className="headline">Case 4 <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Jackson County Economic Development Foundation</strong><br />
          <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing Sed a turpis eu augue lacinia vehicula. Ut nisl sapie.</p>
       
      
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'90%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/jcedf/">Jackson County Economic Development Foundation<br /> View the case study</Link></h1>

        </div>
    </div>
    
    <BgImage filename="night233.jpg" />
 </div> */}




 {/* <div className="outerpanel" style={{borderRight:'none'}}>

<span className="headline">Case 5 <IoMdFingerPrint className="touchindicator" style={{position:'absolute', top:'20%', right:'10%', fontSize:'170%', animation:'tooltop 3s forwards',}}/></span>
<div className="innerpanel" style={{}}>
      
          <div className="contentpanel" style={{}}>
          
          <strong style={{fontSize:'130%'}}>Coast Electric Power Association</strong><br />
          <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <p style={{ }}>Lorem ipsum dolor sit amet, consectetur adipiscing Sed a turpis eu augue lacinia vehicula. Ut nisl sapie.</p>
       
      
        <h1 style={{fontSize:'100%', animation: 'fade 3s forwards', opacity:'0', textAlign:'center', maxWidth:'90%', margin:'1rem auto 0 auto'}}><Link className="button2" to="/case-study/coastelectric/">Coast Electric Power Association<br /> View the case study</Link></h1>

        </div>
    </div>
    
    <BgImage filename="night245.jpg" />
 </div> */}


    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default CaseStudyPanels