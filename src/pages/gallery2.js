import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery2'

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal2 = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 2" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Gallery 2</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal2
