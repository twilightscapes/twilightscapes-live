
import React from "react"




// import Layout from "../components/layout"



import { graphql, useStaticQuery } from 'gatsby'
import Gallery from './Gallery'
// import ScrollAnimation from 'react-animate-on-scroll'
import { FiZoomIn } from 'react-icons/fi'

import styled from "styled-components"
const CustomBox = styled.div`


#galleries {
	position:relative;
background: rgb(126,209,234);
background: -moz-radial-gradient(center,ellipse cover,rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%);
background: -webkit-radial-gradient(center,ellipse cover,rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%);
background: radial-gradient(ellipse at center,rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%);
}

// .intro:before{
// 	content: "Cars";

// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// }


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


const Ghost = graphql`
  query Ghost {
    allFile(filter: { relativeDirectory: { eq: "ghosttowns" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
          }
        }
      }
    }
  }
`

const Gal1Page = () => {
  const data = useStaticQuery(Ghost)
  return (
<CustomBox>
    



    {/* <SlidePanelHome1 /> */}
    
    <div className="zoomer" style={{zIndex:'1', position:'fixed', display:'flex', justifyContent:'center', width:'100vw'}}>
    <span style={{display:'flex',alignItems:'center', justifyContent:'center', position:'fixed', bottom:'50px', zIndex:'1', textAlign:'center', color:'#fff', fontSize:'100%', fontFamily:'Hammersmith One', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', }}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</span>
</div>



    

    <div className="intro" style={{background:'#111',}}>
    <Gallery
      photos={data.allFile.edges}
    />
    </div>


  

    


    
    
    
  
  </CustomBox>
  )
}

export default Gal1Page
