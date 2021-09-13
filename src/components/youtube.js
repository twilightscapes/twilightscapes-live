import React from "react"
import { Link } from "gatsby"

// import { ProductListing } from "../components/product-listing"
// import GoBack from "../components/goBack"
import styled from "styled-components"
// import ShareSocial from '../components/share' 
// import { StaticImage } from "gatsby-plugin-image"
// import { Helmet } from "react-helmet"
// import { Seo } from "../components/seo"
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { ImPlay } from "react-icons/im"
// import { RiSendPlane2Line } from "react-icons/ri"
// import Install from "../components/install-discount"
// import SVG from "../../static/assets/crude-addiction.svg"
// import ScrollAnimation from 'react-animate-on-scroll'
// import GiftShop from "../components/giftshop"
// import PhotoMenu from "../components/animated-photos-menu"
// import CommentBox from "../components/commentbox"
import ReactPlayer from 'react-player/lazy'
// import ReactPlayer from '../components/react-player'
const CustomBox = styled.div`
@media (max-width: 48em) {
}
@media (min-width: 58em) {
}
`




// const CustomButton = (props) => {
// 	return (


// <iframe title="AdFree YouTube" id="youtube2" className="blog-video" width="100%" height="400" src={props.FinalUrl} frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', width:'100vw', height:'100%',   }} />

// 	)
// }


        
        export default class BlogPost extends React.Component {
          
          
          state = {
            youtubelink: "",
            isActive:true,

          }

          
          handleInputChange = event => {
            const target = event.target
            const value = target.value
            const name = target.name
            this.setState({
              [name]: value,
            })
   
          
 
          }

        handleShow = ()=>{
            this.setState({
                isActive: true
            })
        }
      
        handleHide = () =>{
            this.setState({
                isActive: false
            })
        }

          handleSubmit = event => {
            event.preventDefault()
          }


          render() {

          
            const Url = this.state.youtubelink

            const urlNoProtocol = Url.replace(/^.*((youtu.be\/))/i, "")
            const FinalUrl = "https://www.youtube.com/embed/" + urlNoProtocol + "?controls=1&amp;showinfo=1&amp;color=white&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=0&amp;playlist=" + urlNoProtocol + ""

            function Iframed() {
  
              return (
        
                

                <ReactPlayer
  className='react-player'
      url={FinalUrl}
      width='100%'
      height='100%'
      shownfo={false}
      controls={false}
      autoplay={true}
      playing
      fullscreen
      color="white"
      muted={true}
      // playIcon={<button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'10', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', paddingTop:'5%'}}>
        

      //   <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
      //   <div style={{ textAlign:'center', fontSize:'30px'}}>
      //      Ads Removed!</div>
      // <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      // <span style={{fontWeight:'bold', padding:'0 0 0 1rem', fontSize:'60px'}}>Click To Play</span>
      
      // </div>
      // </button>}
      // light="../static/assets/transparent.png"
    />

              )
            }

            
            return (

<>





{urlNoProtocol ? (
     <Iframed />
        ) : (
          ""
        )}




{!this.state.isActive ? 

<>



    
    
    </>
  : 

<div className="" style={{display:'flex', justifyContent:'center', width:'90%', margin:'0 auto',}}>
      
    <form className="youtubeform frontdrop" onSubmit={this.handleSubmit} style={{ padding:'2rem 12%', border:'1px solid #333', borderRadius:'12px', height:'auto', width:'100%', maxWidth:'800px', margin:'0 auto', zIndex:'15', position:'relative', bottom:'40vh',transition:' all 0.85s', animation:'fade .8s forwards'}}>

<p className="headline" style={{fontSize:'20px', color:'#fff', fontWeight:'bold', textAlign:'center'}}>Paste YouTube Link Here:
</p>
<input
          id=""
          type="text"
          name="youtubelink"
          value={this.state.youtubelink}
          onBlur={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          onLoad={this.handleInputChange}
          // onChangeCapture={this.handleShow}
          // value="https://youtu.be/Ahas9vPsFW8"
          placeholder="example: https://youtu.be/cVsQLlk-T0s"
          autoFocus
          className="youtubelinker"
        />
        
</form>
    
    </div>
  }
  











     </>

    )
    }
}