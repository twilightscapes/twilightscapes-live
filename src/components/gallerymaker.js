
import * as React from "react"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
  // USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
  // import { SRLWrapper } from 'simple-react-lightbox-pro'

  import { GatsbyImage } from 'gatsby-plugin-image'
  import { graphql } from 'gatsby'

  const Index1Page = ({data}) => (
  



      <div className="MyComponent">
        <SimpleReactLightbox><SRLWrapper>
        {data.allFile.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })}
        </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    );

      

    export default Index1Page

    export const index21Query = graphql`
    query day222Photos {
      allFile(
        filter: {relativeDirectory: {eq: "cars"}, relativePath: {}}
        sort: {order: ASC, fields: name}
      ) {
        edges {
          node {
            name
            id
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    `

