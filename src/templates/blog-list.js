/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

import { StaticImage } from "gatsby-plugin-image"


import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowRightSLine, RiArrowLeftLine, RiStarLine} from "react-icons/ri"


import PostCard from "../components/post-card"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"


import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


// import Gall1 from '../components/gallery1'

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  easing: 'easeIn',
  arrows: true,

  prevArrow: <div style={{width: "40px", marginRight: "10px", zIndex:'1', cursor:'pointer', dropShadow:'(30px 10px 4px #4444dd)', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  nextArrow: <div style={{width: "40px", marginLeft: "10px", zIndex:'0', cursor:'pointer', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`
const Pagination = props => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/galleries/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    return (
      <Layout className="blog-page1">
        <Seo
          title={"Twilightscapes Galleries — Page " + currentPage + " of " + numPages}
          description={
            "Twilightscapes base gallery page " + currentPage + " of " + numPages
          }
        />
        
        <div
      className="wrapper1"
      style={{
        textAlign: "center",
      }}
    >
<h1 style={{padding:'10px', margin:'0'}}>Themed Galleries</h1>

    </div>

        


{/* <Gall1 /> */}

<br />
<div style={{ maxHeight:'30%'}}>
<Slide {...properties} style={{zIndex:'-1'}}>
<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
      border:'0px solid blue'
    }}
  >

<Link
      className=""
      to="/favorites/"
      sx={{
        variant: "variants.button",
      }}
      title="Popular Favorites"
    >
    
    <div >
      <StaticImage src="../img/homepage.jpg" alt="Popular Favorites" />
    </div>
    

  <div style={{position:'absolute', top:'30%', right:'10vw', border:'0px solid green', fontSize:'8vw'}}>Popular Favorites</div>

  <div style={{position:'absolute', top:'50%', right:'10vw', fontSize:'8vw'}}>
    <Link
            to="/favorites/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
</div>
        

</Link>
</article>




<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
    }}
  >

<Link
      className=""
      to="/cars/"
      sx={{
        variant: "variants.button",
      }}
      title="Relics of Rust"
    >
    
    <div >
    <StaticImage src="../img/cars/night400.jpg" alt="Abandoned car in Paris TX" />
    </div>
    

  <div style={{position:'absolute', top:'30%', right:'10vw', fontSize:'8vw'}}>Relics of Rust</div>


  <div style={{position:'absolute', top:'50%', right:'10vw', fontSize:'8vw'}}>
    <Link
            to="/cars/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
</div>


</Link>
</article>













<article
    className="post-card1 each-slide"
    sx={{
      // bg: "cardBg",
      position: 'relative',
    }}
  >

<Link
      className=""
      to="/ghosttowns/"
      sx={{
        variant: "variants.button",
      }}
      title="Ghost Towns"
    >
    
    <div >
    <StaticImage src="../img/ghosttowns/night305.jpg" alt="Todd photographs ghost towns" />
    </div>
    

  <div style={{position:'absolute', top:'30%', right:'10vw', fontSize:'8vw'}}>Ghost Towns</div>


  <div style={{position:'absolute', top:'50%', right:'10vw', fontSize:'8vw'}}>
    <Link
            to="/ghosttowns/"
            className="button box-shadow"
            sx={{
              variant: "variants.button",
            }}
          >
       View the Gallery
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
</div>


</Link>
</article>










</Slide>
</div>

<br />
{/* <h4 style={{display:'block', textAlign:'center', fontSize:'70%', color:'#ddd',}}>Full Library:</h4> */}
<ul className="galmenu">
<li style={{width:'100px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 0 0 0',}}>Bonus Galleries</li>
      <li className="galmenu-item"><Link to="/gallery1/" className="button" sx={{variant: "variants.button",}} title="Gallery 1" id="gallery1">I</Link></li>
      <li className="galmenu-item"><Link to="/gallery2/" className="button" sx={{variant: "variants.button",}}  title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/gallery3/" className="button" sx={{variant: "variants.button",}}  title="Gallery 3">III</Link></li>
    
      </ul>





<div className="grids col-1 sm-2 lg-3" style={{display:'none'}}>
      
    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
     <Link
      className=""
      to="/favorites/"
      sx={{
        variant: "variants.button",
      }}
      title="Popular Favorites"
    >
      
      <div >
      <StaticImage src="../img/homepage.jpg" alt="Popular Favorites" />
        </div><div className="post-content"><h2 className="title">Popular Favorites</h2><p className="meta">If you're new here, start here!</p></div>
        
       <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
</Link>
    </article>

    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/cars/"
      sx={{
        variant: "variants.button",
      }}
      title="Relics of Rust"
    >
<div >
      <StaticImage src="../img/cars/night400.jpg" alt="Abandoned car in paris TX" />
        </div><div className="post-content"><h2 className="title">Relics of Rust</h2><p className="meta">Todd's favorite subject matter</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
</Link>
    </article>


   


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative'
    }}
  >
    <Link
      className=""
      to="/ghosttowns/"
      sx={{
        variant: "variants.button",
      }}
      title="Ghost Towns"
    >
     <div >

      <StaticImage src="../img/ghosttowns/night305.jpg" alt="Ghosttowns" />
        </div><div className="post-content"><h2 className="title">Ghost Towns</h2><p className="meta">The real Old West comes alive at night</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
        </Link>
    </article>



    
    </div>


    <div
      className="wrapper"
      style={{
        textAlign: "center",
        marginTop:'5vh',
        clear:'both'
      }}
    >
<h2>Lastest &amp; Greatest</h2>

    </div>
    
    <div className="grids col-1 sm-2 lg-3" style={{clear:'both'}}>
  
      
 {posts}</div>
        <Pagination {...props} />


        



      </Layout>
    )
  }
}

export default BlogIndex
