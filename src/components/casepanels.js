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
  height:90vh;
  // height: calc(100vh - 88px);
  overflow:hidden;
}

.slidepanel > div{
  min-width:16vw;
  width:50vw;
  flex-grow:1;
  flex-shrink:1;
  height:100%;
  overflow:hidden;
  transition:all .5s ease;
  border-left:1.5px solid #222;
  border-right:1.5px solid #222;
  border-radius:0px;
  position:relative;
  align-items: center;
  justify-content: center;
  overflow:hidden;
}


.slidepanel > div:hover{
  flex-shrink:0
}

.pop{
  width:100%;
  height:100vh ;
  object-fit: cover;
  position:absolute;
  z-index:-1;
  padding:0;
  margin:0;
  border:0px solid yellow;
  // background-position:bottom bottom;
  // object-position: 100% 100%;
}




.slidepanel > div:hover{
  width:70vw;
  }

  .slidepanel > div:hover .contentpanel{
    min-width:100%; border:0px solid red;
    width:70vw;
  }







.slidepanel a{
  // z-index:0;
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
    width:100%;
    position:absolute;
    margin:0 0 0 0;
    height:100%;
    padding:0 0 0 0;
  }

 .contentpanel{
     display:block;
     margin:0 auto;
     padding:0 1rem;
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
    height:100%;
    animation:fade 1.7s forwards;
    }

  

    .contentpanel > *{opacity:0; animation:fade 3s forwards;}

    .headline{
      padding:1em;
     margin:0 auto;
    box-shadow: 0px 1px 6px 1px black;
    text-shadow: 1px 2px 1px black;
    // background: rgba(250, 3, 196, 0.9);
    background: rgba(0, 0, 0, 0.8);

    // filter: brightness(120%);
    font-size:100%;
    font-weight:0 !important; 
    position:absolute;
    bottom:5vh;
    color:#fff;
    width:100%;
    transition: all .6s ease-out;
    display:block !important;
    z-index:1;
    }



@media (max-width: 48rem) {
  // .slidepanel > div{width:70%; border:0px solid red;}
  // .slidepanel > div:last-child{display:; width:50%}
  .headline{padding:4px; font-size:70%;}
  .contentpanel{
    padding:2rem 1rem;
    padding-top:2vh;
  }
  }
  @media (min-width: 48rem) {
  .contentpanel{
    padding:2rem 2rem;
    padding-top:1vh;
  }
  }
  
  @media (min-width: 1024px) {
    .contentpanel{
      padding:2rem 3rem;
      padding-top:1vh;
    }
    }



 .gatsby-image-wrapper{position: initial !important;}










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

      }

`

const CaseStudyPanels = () => (

    <CustomBox style={{}}>



<div className="panel-wrapper" style={{marginTop:'0', overflow:'hidden'}}>
    





  <div className="slidepanel">
  








  <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline">Stellar Sentries</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1'}}>
          
          

 <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>
 <a href="https://foundation.app/@twilightscapes/stellar-sentries-51674" target="_blank" rel="noopener noreferrer nofollow">
<StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="" style={{ }} /></a>

</div>




          <h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Stellar Sentries</h2>

          <p>A very rare night photo of the Very Large Array (VLA). I'd always been intrigued by this place and I'd wanted to visit it. These towers are like nimble giants, constantly twitching and positioning and working tirelessly throughout the night.</p>

<p>After having obtained special permission to be on the premises after dark by way of a favor, I was able to get the perfect lineup framed and then waited for the skies to darken and the stars to come out.</p>

<p>Single Shot - No PS - lightpainted long exposure</p>


<div style={{textAlign:'center', padding:'0 30%', margin:'10px 0 0 0'}}>
              <a
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'10%',
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
  </div>

        </div>
        
        
    </div>
    <StaticImage src="../img/favorites/night165.jpg" alt="Twilightscapes" className="pop" />

 </div>















 <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline">Alien Egg Farm</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1'}}>
          
          

 <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>

 <a href="https://foundation.app/@twilightscapes/alien-egg-farm-51678" target="_blank" rel="noopener noreferrer nofollow">
<StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="" style={{ }} /></a>

</div>

          
          <h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Alien Egg Farm</h2>

          <p>Possibly one of the most far-out locations I've ever been to. The Bisti Badlands are on tribal land and extremely remote. There are no roads. This is a 3.5 mile hike into some of the most extreme landscapes.
</p>

<p>It seems like around every corner there is another scene that appears to be from a distant planet. These "alien eggs" are actually weathered limestone.</p>




<p>Single Shot - No PS - long exposure</p>



<div style={{textAlign:'center', padding:'0 30%', margin:'10px 0 0 0'}}>
<a
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href="https://foundation.app/@twilightscapes/alien-egg-farm-51678"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>
  </div>


        </div>
        
        
    </div>
    <StaticImage src="../img/favorites/night295.jpg" alt="Twilightscapes" className="pop" />

 </div>












 <div className="outerpanel" style={{borderLeft:'none'}}>

<span className="headline">Boatswain's Blunder</span>
      <div className="innerpanel" style={{height:'100%', width:'100%'}}>
      
          <div className="contentpanel" style={{position:'relative', zIndex:'1'}}>
          
          

 <div style={{position:'relative', zIndex:'1', margin:'0 auto', display:'flex', justifyContent:'center', padding:'0', border:'1px solid #666'}}>

 <a href="https://foundation.app/@twilightscapes/boatswain-s-blunder-51680" target="_blank" rel="noopener noreferrer nofollow">
 <StaticImage src="../img/gallery2/night282.jpg" alt="Twilightscapes" className="featured-image " /></a>

</div>

          
          <h2 style={{fontSize:'3vw', margin:'0 0 2rem 0'}}>Boatswain's Blunder</h2>

          <p>Confinement, a bode of misery with blue majesty abound.</p>

<p>The petty officer, Mr. Transcontinental promised treasures never found.</p>

<p>Recognized with nothing but obscurity for the sea is sole judge and jury.</p>

<p>Crashing thunderstorms are the only sound where lonesomeness becomes friend and death is crowned.</p>

<p>Thoughts of liberation are constant wonder. from mast to keel and gunwale, this swoon of a boatswain’s blunder.</p>

<p>-- by Todd Lambert</p>

<div style={{textAlign:'center', padding:'0 30%', margin:'10px 0 0 0'}}>
<a
              className="button"
              sx={{
                cursor:'pointer',
                maxWidth:'50%',
                backgroundColor:'#000 !important',
                textAlign:'center',
              }}
              href="https://foundation.app/@twilightscapes/boatswain-s-blunder-51680"
            >
              Place Bid Now {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </a>
  </div>


        </div>
        
        
    </div>
    <StaticImage src="../img/gallery2/night282.jpg" alt="Twilightscapes" className="pop" />

 </div>







    


    

    
    
  </div>
</div>



</CustomBox>
  
  )
  
  export default CaseStudyPanels