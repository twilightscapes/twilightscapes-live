/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'
const PostCard = ({ data }) => (


<section className="child" style={{position:'relative', height:'', overflow:'hidden'}}>

  <article
    className="post-card"
    style={{display:'', alignItems:'center', justifyContent:'center', width:'100%', height:'', position:'relative', }}
  >






    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug + "/"}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
          style={{position:'relative', zIndex:'0'}}
        />

      </Link>
    ) : (
      <Link  to={data.frontmatter.slug + "/"}><StaticImage className="featured-image" src="../../static/default-og-image.jpg" alt="Twilightscapes Default Image" style={{position:'relative', zIndex:''}} /></Link>
    )}


<div className="post-content" >

<h2 className="title">
  <Link 
    to={data.frontmatter.slug + "/"}
  >
    {data.frontmatter.title}
  </Link>
</h2>
<p style={{minWidth:'20vw', position:'relative', textAlign:'center',}}>
  <TimeAgo date={data.frontmatter.date}/>
</p>
</div>


  </article>
  </section>
)

export default PostCard
