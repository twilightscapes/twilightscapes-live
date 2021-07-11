import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/favorites'

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Favs = () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Popular Favorites" />

    <GalleryMenu />  

    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
<h1>Popular Favorites</h1>

    </div>
    
    <Gall1 />
    <br />
    <GalleryMenu />
  </Layout>
)

export default Favs
