import * as React from "react"
// import { Layout } from "../components/layout"
// import GoBack from "../components/goBack"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { Seo } from "../components/seo"
// import CasePanels from "../components/casepanels"
import GalleryMenu from "../components/galleryMenu"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import styled from "styled-components"
const CustomBox = styled.div`






`


const options = {
  settings: {
    autoplaySpeed: 4000,
    boxShadow: '0px 0px 20px #000',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: true,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: '#FA02B7',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
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
showCaption: false
  },
  thumbnails: {
    showThumbnails: false,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: '#111',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 2px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#000',
    fillColor: '#333',
    height: '3px',
    showProgressBar: true
  },
};

export default function PortfolioPage() {
   return (

<>
     <CustomBox>
    {/* <Layout className="thanks-page">

<Seo
          title={`Photography`}
          description={`Twilightscapes - `}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        /> */}
    
    {/* <div className="spacer66"></div> */}

  

{/* <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0',}}> */}

<div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0',}}>

  <TwilightLogo style={{
  filter:'brightness(0.3)contrast(4.4)hue-rotate(117deg)saturate(9.9)', maxWidth:'50vw', opacity:'.7',
  position:'absolute', zIndex:'-1', top:'15vh'}} />


<div className="RArrow">
 <span></span>
</div>
<SimpleReactLightbox>
<SRLWrapper options={options}>

<div className="horizontal-scroll-wrapper squares" style={{ width:'', padding:'0'}}>

<div style={{width:'1000px', height:'1000px'}}></div>



<StaticImage
        src="../img/faves/ghost-ship.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../img/faves/in-the-sky-with-diamonds.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/challenger-explosion.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/atomic-martini-flyboys.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/TexasPrada.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/vla.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/alien-egg-farm.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />





<StaticImage
        src="../img/faves/ambassador-of-twilight.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../img/faves/americandreams.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../img/faves/cadillac-binary.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/captive-light.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/christmas-in-cambodia.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/comeinpieces.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../img/faves/CosmicPortal.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />

<StaticImage
        src="../img/faves/disciple-rocks.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/felisha.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />



<StaticImage
        src="../img/faves/how-i-see-daylight.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/LastGasp.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/pontotoc.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/StellarSentries.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


<StaticImage
        src="../img/faves/VictoryInChaos.jpeg"
        alt="Twilightscapes - Night Photography by Todd Lambert"
        srl_gallery_image="true"
        className="item"
      />


 
     </div>
</SRLWrapper></SimpleReactLightbox>

 {/* <Link className="post-card" state={{modal: true}} to="/legacy/" title="View Todd's Legacy Work" style={{position:'absolute', left:'0', top:'10px', zIndex:'1', width:'60px',  background:'rgba(0, 0, 0, .9)', height:'350px', display:'flex', borderRadius:'0 12px 12px 0'}}>

  
  <div style={{position:'absolute', right:'180%', top:'', transform: 'rotate(90deg)', width:'', height:'100%', border:'0px solid red', color:'#fff',  textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold'}}>View Legacy Work Here</div>
</Link> */}


</div>








<GalleryMenu />
    
    {/* </Layout> */}
 </CustomBox>
</>
  )
}
