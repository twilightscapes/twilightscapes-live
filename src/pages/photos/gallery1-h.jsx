import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { Layout } from "../../components/layout"
import { Seo } from "../../components/seo"
import { SRLWrapper } from "simple-react-lightbox"
import GalleryMenu from "../../components/galleryMenu"
import TwilightLogo from "../../../static/assets/TSidebarHover.svg"

const Gal1Page = ({data}) => (
  
      <Layout className="thanks-page">

<Seo
          title={`Night Photography`}
          description={`Twilightscapes - Abandoned Night Photography`}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />
 <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100%', overflow:'hidden', position:'relative', padding:' 0',}}>
      

      <TwilightLogo style={{
      filter:'brightness(0.3)contrast(4.4)hue-rotate(117deg)saturate(9.9)', maxWidth:'50vw', opacity:'.7',
      position:'absolute', zIndex:'-1', top:'15vh'}} />
    
      <div className="RArrow">
     <span>&#10095;</span>
    </div>
    
          <SRLWrapper options={options} className="">
          {/* <div className="masonry" style={{}}> */}
          <div className="horizontal-scroll-wrapper squares" style={{ width:'', padding:'0'}}>

          <div style={{width:'1000px', height:'1000px'}}></div>

        {data.allFile.edges.map(edge => {
          return <Img srl_gallery_image="true" className="item" fluid={edge.node.childImageSharp.fluid} />
            
        })}
        </div>
        </SRLWrapper>
            </div>
             <GalleryMenu />
    
             {/* <ShareSocial /> */}
             {/* <div className="spacer66" /> */}
    
      </Layout>
    )
    
    const options = {
      settings: {
        autoplaySpeed: 4000,
        boxShadow: '0px 0px 20px #000',
        disableKeyboardControls: false,
        disablePanzoom: false,
        disableWheelControls: false,
        hideControlsAfter: false,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(0, 0, 0, 0.1)',
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
        showDownloadButton: false,
        showFullscreenButton: false,
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

export default Gal1Page

export const indexQuery = graphql`
  query gal1hPhotos {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/img/gallery1/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`