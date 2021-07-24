import React from 'react'
// import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'



const BackgroundImage1 = props => (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp
                    
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename);
        });
        
        if (!image) {
          return null;
        }
  
  
        //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
        return <BackgroundImage
        fluid={image.node.childImageSharp.fluid} 
        tag="div"
            style={{
                height: `100vh`,
                width: `100%`,
                backgroundColor: `transparent`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                display: `flex`,
                alignItems: `center`,
                zIndex:'-5',
            }}
        />;

        

      }}
    />
  );
  
  export default BackgroundImage1;