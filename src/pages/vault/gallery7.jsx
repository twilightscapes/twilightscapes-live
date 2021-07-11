import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from "../../components/layout"
// import Image from '../../../components/Image'
// import { RiSendPlane2Line } from "react-icons/ri"

import { FiZoomIn } from 'react-icons/fi'
import Gallery from '../../components/Gallery'
import GalleryMenu from '../../components/GalleryMenu'

import styled from "styled-components"
const CustomBox = styled.div`



#gallery1 {
	position:relative;
background: rgb(126,209,234); /* Old browsers */
background: -moz-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%, rgba(65,145,186,1) 40%, rgba(3,73,127,1) 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at center, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}





.intro:before{
	content: "Gallery 7";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:5vw; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}




@media (max-width: 48rem) {
.intro:before{font-size:200%;}
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/





`


const Gall7 = graphql`
  query Gall7 {
    allFile(filter: { relativeDirectory: { eq: "gallery7" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid_withWebp
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`


export default function Gal7Page({}) {
  const data = useStaticQuery(Gall7)
  return (
    <CustomBox>
    <Layout>



    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        marginTop:'20px',
        paddingTop:'0',
      }}
    >
<h1>Popular Favorites</h1>

    </div>
<GalleryMenu /> 

    <div className="zoomer" style={{zIndex:'1', position:'fixed', display:'flex', justifyContent:'center', width:'100vw'}}>
    <span style={{display:'flex',alignItems:'center', justifyContent:'center', position:'fixed', bottom:'50px', zIndex:'1', textAlign:'center', color:'#fff', fontSize:'100%', fontFamily:'Hammersmith One', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', }}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</span>
</div>



      

      <div className="intro" style={{background:'#111', marginTop:'10px'}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>

<br />
<GalleryMenu />

    </Layout>
    </CustomBox>
  )
}