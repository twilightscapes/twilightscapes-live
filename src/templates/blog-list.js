/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
// import { FaHandPointDown } from "react-icons/fa"
// import ScrollAnimation from 'react-animate-on-scroll'
// import { StaticImage } from "gatsby-plugin-image"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri"


import PostCard from "../components/post-card"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"


// import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


// import Gall1 from '../components/gallery1'

// const properties = {
//   duration: 4000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: false,
//   easing: 'easeIn',
//   arrows: true,

//   prevArrow: <div style={{width: "40px", marginRight: "10px", zIndex:'1', cursor:'pointer', dropShadow:'(30px 10px 4px #4444dd)', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
//   nextArrow: <div style={{width: "40px", marginLeft: "10px", zIndex:'0', cursor:'pointer', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
// };



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
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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
            to={`${props.blogSlug}${i === 0 ? "" : i + 1 + "/"}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage + "/"} rel="next">
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
    const blogSlug = "/posts/"
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
<Helmet>
  <body className="bloglist" />
</Helmet>
        <Seo
          title={"Twilightscapes Archive — Page " + currentPage + " of " + numPages}
          description={
            "Twilightscapes Archive page " + currentPage + " of " + numPages
          }
        />
        

{/* <h1 style={{padding:'10px', margin:'0'}}>Articles</h1> */}



        


{/* <Gall1 /> */}

<br />
{/* <div style={{ maxHeight:'30%'}}>
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



    
    </div> */}


<div id="contentscroll" name="container2" className="container" style={{display:'', justifySelf:'', width:'100%', maxWidth:'100%', height:'', border:'0px solid #000 !important', margin:'0', marginTop:'0', padding:'4%'}}>


<h1 className="headline neonText" style={{fontSize:'250%', textAlign:'center', margin:'0', padding:'0'}}>Archive</h1>
{/* VidSock - The World's First Multimedia 3D Blog for creating, hosting and marketing the next generation of NFTs. */}

{/* onFocus={disableBodyScroll()} */}
<Pagination {...props} />
 {/* <div className="home-posts grids col-1 sm-2 lg-3" style={{clear:'both', textAlign:'left'}}> */}


 <section style={{height:'auto'}}>
  <Link to="/#posts" style={{display:'block', width:'100%'}}><article className="post-card" style={{height:'50%', display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid', padding:'2rem', fontSize:'200%', textAlign:'center' }}>
  <RiArrowLeftLine style={{fontSize:'50px'}} /> View Newest 
    </article></Link>
    </section>

 <section style={{height:'auto'}}>
  <article className="" style={{height:'auto'}}>

 {posts}

</article>
</section>

        <Pagination {...props} />


        

</div>


{/* <h3 style={{textAlign:'center', fontSize:'160%', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Have a suggestion for an article?</h3>

<ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation> */}
 <br /><br />
      </Layout>
    )
  }
}

export default BlogIndex
