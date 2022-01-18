/** @jsx jsx */
// import React from "react"
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Countdown from 'react-countdown'
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
import { SRLWrapper } from "simple-react-lightbox"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'
import YouTubed from "../pages/youtube"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
import TimeAgo from 'react-timeago'
import styled from "styled-components"
// import InnerImageZoom from 'react-inner-image-zoom'
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
const CustomBox = styled.div`
@media (max-width: 48rem) {
  .home-posts{flex-direction:column !important; width:90% !important; margin:0 auto !important;}
}
`

const options = {
  settings: {
    autoplaySpeed: 3000,
    // boxShadow: '0px 0px 20px #fff',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    // overlayColor: 'rgba(185, 7, 230, 0.5)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: '40px'
  },
  caption: {
captionAlignment: 'start',
captionColor: '#FFFFFF',
captionContainerPadding: '20px 12% 30px 12%',
captionFontFamily: 'inherit',
captionFontSize: 'inherit',
captionFontStyle: 'inherit',
captionFontWeight: 'inherit',
captionTextTransform: 'inherit',
showCaption: true
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 1px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#f2f2f2',
    fillColor: '#000000',
    height: '3px',
    showProgressBar: true
  },
};

const Pagination = props => (
  <div className="pagination -post">
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link to= {props.previous.frontmatter.slug + "/"} rel="prev">
            <p
              style={{
                color: "inherit",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Previous
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.next.frontmatter.slug + "/"} rel="next">
            <p
              style={{
                color: "inherit",
              }}
            >
              Next{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)







const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


    const NftLink = frontmatter.nftlink
    const NftRedeem = frontmatter.nftredeem
    const NftDrop = frontmatter.nftdrop



  const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }
function AddSvg(){
  const svgUrl = frontmatter.svgImage.publicURL



  return (
    <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'', left:'0', right:'0', bottom:'0', overflow:'hidden', border:'0px solid red', zIndex:'2', width:'100vw', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>
  )
}


const IsNft = frontmatter.isnftforsale
const ShowOriginal = frontmatter.youtubeshoworiginal
const ShareThis = frontmatter.shareable
const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart

const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3


if (Suggestion1) {
  <ShowSuggestion />
}
else{

  
}

function ShowSuggestion() {

  return (
<div style={{}}>
  

  
<div style={{width:'90%', maxWidth:'400px', margin:'85px auto 0 auto', fontSize:'90%', padding:'5px 0 ', border:'4px dotted', borderRadius:'12px', textAlign:'center', position:'relative', }}>
<IoArrowRedoSharp style={{position:'absolute', top:'0', left:'0', fontSize:'60px', transform: 'rotate(-45deg)', }} />
<IoArrowUndoSharp style={{position:'absolute', top:'0', right:'0', fontSize:'60px', transform: 'rotate(45deg)', }} />
  
  
  <span style={{fontSize:'120%', fontWeight:'bold', textTransform:'uppercase'}}>This art is interactive!</span> 
<br />

The artist recommends these alternatives:
<br /><br />
Click to Copy:<br />
<CopyToClipboard text={Suggestion1}>
  <button>{Suggestion1} </button>
</CopyToClipboard><br />


  <CopyToClipboard text={Suggestion2}>
  <button>{Suggestion2} </button>
</CopyToClipboard><br />

<CopyToClipboard text={Suggestion3}>
  <button>{Suggestion3} </button>
</CopyToClipboard><br />

<br />
Add your favorites in the comments below!

</div>

<span style={{fontSize:'150%'}}></span>
<div className="mobilespace" style={{ border:'0px solid red'}}></div>
</div>
  )
}

const YoutuberSuggestion1 = frontmatter.youtubersuggestion1
// const YoutuberSuggestion2 = frontmatter.youtubersuggestion2
// const YoutuberSuggestion3 = frontmatter.youtubersuggestion3
const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber + ""
  const YouTube = frontmatter.youtuber



  if (!YoutuberSuggestion1) {
    <IframeSuggestions />
  }
  else{
  
    
  }





  function IframeSuggestions() {
    
    return (
      <div>
              <ReactPlayer
              className='react-player66'
              url={iframeUrl}
              // url={[
              //   iframeUrl,
              //   YoutuberSuggestion1,
              //   YoutuberSuggestion2,
              //   YoutuberSuggestion3
              // ]}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo:0, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
                },
              }}
              loop
              playing
              playsinline
              playIcon={
                <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
            <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
              
    
              <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
      <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
    </div>
          
              <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
      <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
              </div>
              </button>}
                light="../assets/transparent.png"
              />

              
</div>

    )

  }

  function Iframer() {
    const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber

    return (

 <div>
              <ReactPlayer
              className='react-player66'
              url={iframeUrl}
              // url={[
              //   iframeUrl,
              //   Suggestion1,
              //   Suggestion2,
              //   Suggestion3
              // ]}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
                },
              }}
              loop
              playing
              playsinline
              playIcon={
                <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
            <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'', margin:'0 auto'}}>
              
    
              <div style={{position:'relative', maxWidth:'', margin:'0 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>

              <object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ overflow:'hidden', border:'0px solid red', zIndex:'0', width:'30vw', maxWidth:'', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>


      {/* <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'300px', height:'150px', maxWidth:'300px', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} /> */}
    </div>
          <br />
              <div className="button" style={{width:'', margin:'0 auto', fontWeight:'bold', padding:'0 1rem', fontSize:'2rem',  borderRadius:'12px', border:'1px solid #333',filter:'drop-shadow(2px 2px 2px #000)'}}><span style={{filter:'drop-shadow(2px 2px 2px #000)'}}>Click To Play</span></div>
      {/* <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /> */}
              </div>
              </button>}
                light="../assets/transparent.png"
              />
</div>

    )
  }






  function Iframer2() {
    const iframeUrl2 = "https://www.youtube.com/embed/" + frontmatter.youtuber
    return (

<div>
<ReactPlayer
          className='react-player66'
          url={iframeUrl2}
          width="100%"
          height="100%"
          style={{zIndex:'0'}}
          playing
          playsinline
          config={{
            youtube: {
              playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:0  }
            },
          }}
          playIcon={
            <button aria-label="Click To Play" className="clickplay" style={{position:'relative', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
              
      
      
      
        <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
          <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      
          <span className="headline" style={{fontWeight:'bold', padding:'0 0 0 0',}}>Click To Play</span>
          
          </div>
          </button>}
      
      
      
            light="../assets/transparent.png"
          />
</div>



    )
  }

  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (

<ReactPlayer
          className='react-player67'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="100%"
          height=""
          style={{marginTop:'80px', position:'relative'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'0', top:'', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'absolute', top:'-70px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem', background:'linear-gradient(180deg, #777 30%, #333 80%)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)'}}><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000)'}} /><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}>Click For Audio</div></div>
          
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     




    )
  }





  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()

const Completionist = () => <div style={{minWidth:'50%', width:'100%', maxWidth:'100vw', }}>
  { NftRedeem ? (
      ""
      // <a href={NftRedeem} style={{fontSize:'1.4rem', display:'flex', alignSelf:'center', justifySelf:'center', width:'', maxWidth:'400px',  margin:'10px auto',  textAlign:'center', justifyContent:'center', border:'1px solid', borderRadius:'12px', color:'green', textShadow:'1px 1px 0px #666',}}>REDEEM UNLOCKABLE CONTENT</a>
      ) : (
        ""
      )}
  {/* <nft-card style={{}} contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e" tokenId="14583650834310525071617320783641503123203461641321595508191183187330132344833"> </nft-card> */}
  </div>

const { iconimage } = useSiteMetadata()

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body className="blogpost" />
  <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>
</Helmet>

      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />


  
{/* <div className="video-background1" style={{position:'absolute', top:'0', right:'0', left:'0', zIndex:'0', height:'100vh', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}> */}



<div className='player-wrapper' style={{position:'relative', top:'0', zIndex:'0', height:'100%', overflow:'', filter: 'drop-shadow(0 0 20px #000)' }}>







<div style={{display:'grid', placeContent:'center', width:'100vw', height:'100%', overflow:'', position:'absolute', top:'0', zIndex:'', }}>

<div style={{margin:'0 auto', width:'100%', overflow:''}}>
{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', position:'relative', top:'0', zIndex:'',  border:'0px solid red !important', paddingBottom:''}}
            />
            // <InnerImageZoom src={getSrc(Image)} />


            
            
          ) : (

       ""
            // <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'60vh', position:'absolute', zIndex:'0', bottom:'',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
          </div>

       
</div>






 











{/* {Svg2 ? (
            <AddSvg2 />
       
          ) : (
            ""
          )} */}

  {/* {OverlayImage ? (
            <GatsbyImage
              image={OverlayImage}
              alt={frontmatter.title + " - image"}
              className="layer2"
              style={{height:'100vh', zIndex:'1', postion:'absolute', bottom:'0', left:'0', objectFit:'contain' }}
            />
          ) : (
            ""
          )} */}









{ !YouTube ? (
            ""
       
          ) : (
            <Iframer />
          )}


{Suggestion1 ? (
            <div style={{position:'absolute', top:'0', zIndex:'0',}}>
            <YouTubed />
            </div>
       
          ) : (
            ""
          )}




{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100%', overflow:'hidden', position:'absolute', bottom:'0', zIndex:'0',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}

{Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}



      </div>





{/* <br />
<br /> */}




{Suggestion1 ? (
            <ShowSuggestion />
       
          ) : (
            ""
          )}

{ !YouTube2 ? (
            ""
       
          ) : (
            <Iframer3 />
          )}




<article className="blog-post">
        <header>
          <section className="article-header" style={{textAlign:'center', margin:'0 4%', height:'auto', color:''}}>
            <h1>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} />
          </section>
        </header>





      <span className="mobile"><GoBack /></span>
 <br />




<div className="home-posts" style={{clear:'both', display:'',  justifyContent:'space-around', textAlign:'left', width:'90vw', margin:'0 auto', height:'', maxHeight:'', border:'0px solid blue'}}>



<div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>

{IsNft ? (
            <strong style={{padding:'2rem 1rem'}}>Artist's Notes:</strong>
       
          ) : (
            ""
          )}


<SRLWrapper options={options} className="">
      <div
        className="blog-post-content" style={{ padding:'0 ', fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
      </SRLWrapper>  
     
     <br /><br />
 
</div>



{IsNft ? (

        <div style={{minWidth:'50%', width:'100%', maxWidth:'1000px', maxHeight:'', position:'relative', right:'0', border:'0px solid red', margin:'0 auto'}}>
            {/* <NFTDetails /> */}
            

  



{NftLink ? (
 <div className='NFTiframer-wrapper' style={{position:'relative', top:'0', zIndex:'0', width:'100%', maxWidth:'60vw', margin:'0 auto', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)', background:'#fff', borderRadius:'12px' }}>

 <iframe title="VidSock" id="youtube2" className="blog-video1" width="100%" height="400" src={NftLink} frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'40vh', borderRadius:'12px'  }} />
 </div>
       
          ) : (
            ""
          )}







       

       { NftDrop ? (

         
            <div className="countdown" style={{display:'flex', alignSelf:'center', fontSize:'540%', textAlign:'center', filter: 'drop-shadow(10px 0px 10px #000)', textShadow:'1px 1px 0px #000', border:'0px solid', width:'100%', height:'', padding:'0 0', borderRadius:'12px', flexDirection:'column' }}>
  <Countdown daysInHours date={NftDrop} >
<Completionist />
  </Countdown>



  


</div>


       
          ) : (
""
       

          )}

</div>


          ) : (
            ""
          )}


       


 </div>




 <br />
<br />
<br />

      {/* <object data="/art/boatswains-blunder" width="100%" height="1000"></object> */}



      <br />
<br />
<br />
 {ShowOriginal ? (
          <div style={{position:'relative', width:'100%', maxWidth:'800px', margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>Click to view original video
<div style={{maxWidth:'90vw', width:'100%', height:'440px', maxHeight:'40vh', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px'}}>
  
                    <Iframer2 />
                    
       </div></div>
       
          ) : (
            ""
          )}
        
        


      </article>
  


      <div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>





{/* <Countdown
    // date={Date.now() + 10000}
    date='2022-10-03T04:02:03'
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  /> */}


      






   




       







{ShareThis ? (
<div style={{width:'100%', padding:'0', margin:'0 auto'}}>


  
                    <ShareSocial />
    
       </div>
       
          ) : (
            ""
          )}

<br />

{Suggestion1 ? (
            <div style={{padding:'1vh 5vw', borderTop:'0px solid', marginTop:'3rem', textAlign:'center', fontSize:'1.5rem'}}>
            Find a good one? Post your link Below and then Share it Above. 
      
           </div>
       
          ) : (
            ""
          )}


{Comments ? (
<div style={{width:'80%', padding:'0', margin:'0 auto'}}>
  
<CommentBox />
    
       </div>
       
          ) : (
            ""
          )}
      

      

   
   <br />
   <GoBack />
   <br />
   <br />
   </CustomBox>
   <Footer />
    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQueryBlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        youtuber
        youtuber2
        youtubeshoworiginal
        youtubersuggestion1
        youtubersuggestion2
        youtubersuggestion3
        youtubestart
        youtubeend
        audiostart
        audioend
        youtubemute
        youtubecontrols
        youtubeautostart
        comments
        shareable
        isnftforsale
        nftdrop
        svgzindex
        nftlink
        nftredeem
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage{
          publicURL
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`