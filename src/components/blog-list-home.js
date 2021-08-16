/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"


import PostCard from "./post-card"
// import FeaturedGalleries from "./featured-galleries"

export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
<div>
  {/* <h2 style={{fontSize:'150%', marginBottom:'1rem'}}>
      Spotlight <strong>Galleries</strong>
       <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2> */}
  <section className="home-posts" style={{}} >

    
  {/* <FeaturedGalleries /> */}

{/* <div className="grids col-1 sm-2 lg-3">
      
    

<article
    className="post-card"
    sx={{
      bg: "cardBg",
      position: 'relative',
    }}
  >
     <Link
      className=""
      to="/photos/milky-way/"
      title="Milky Way Photo Gallery"
    >
      
      <div style={{overflow:'hidden'}}>
     
      <StaticImage src="../img/milky-way.jpg" alt="Milky Way Photo Gallery" />
        </div>
        
        <div className="post-content"><h2 className="title">Milky Way</h2><p className="">Photos that feature the Milky Way</p></div>
        
       <div style={{position:'absolute', top:'10px', right:'10px', fontSize:'20px'}}><RiStarLine /></div>
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
      to="/photos/crazy-geology/"
      title="Crazy Geology"
    >  
       <div >
      <StaticImage src="../img/crazygeo/night84.jpg" alt="Crazy Geology Photo Gallery" />
        </div>
       
        <div className="post-content"><h2 className="title">Crazy Geology</h2><p className="">Some of the wildest formations</p></div>
        <div style={{position:'absolute', top:'10px', right:'10px', fontSize:'20px'}}><RiStarLine /></div></Link>
    </article>


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
      position:'relative',
    }}
  >
    <Link
      className=""
      to="/photos/in-the-city/"
      title="In The City"
    >
<div >
      
      <StaticImage src="../img/gallery3/night168.jpg" alt="In and around city centers" />
      
        </div><div className="post-content"><h2 className="title">In The City</h2><p className="">In and around city centers</p></div>
        <div style={{position:'absolute', top:'10px', right:'10px', fontSize:'20px'}}><RiStarLine /></div>
</Link>
    </article>


</div> */}
</section>



<h2 style={{fontSize:'150%', marginBottom:'1rem'}}>
      Latest <strong>Posts</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    
<section className="home-posts" style={{height:'auto'}}>
   
      

    


     <div className="grids col-1 sm-2 lg-3">
      {data}
      
     </div>

    

    
  </section>
  
  <Link
      className="button"
      to="/posts/"
      title="See More Galleries"
      style={{color:'#fff'}}
    >
      See more
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>


</div>
)
