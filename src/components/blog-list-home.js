/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine } from "react-icons/ri"
import Image from '../components/Image'
import PostCard from "./post-card"


export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>
      Latest in <strong>Galleries</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>

    <div className="grids col-1 sm-2 lg-3">
      
    {/* <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>

    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article>


    <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
     <a href="/favorites"><div >
      <Image className="slider" alt="Todd Mushroom" filename="homepage.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div></a><div className="post-content"><h2 className="title"><a href="/favorites" title="Popular Favorites">Popular Favorites</a></h2><p className="meta"><time>May 23, 2020</time></p></div>
    </article> */}


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
      <Image className="slider" alt="Milky Way Photo Gallery" filename="night62.jpg" style={{backgroundSize:'cover', zIndex:'', }} />
        </div>
        
        <div className="post-content"><h2 className="title">Milky Way</h2><p className="meta">Photos that feature the Milky Way</p></div>
        
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
      to="/photos/crazy-geology/"
      title="Crazy Geology"
    >  
       <div >
      <Image className="slider" alt="Crazy Geology" filename="night84.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div>
       
        <div className="post-content"><h2 className="title">Crazy Geology</h2><p className="meta">Some of the wildest formations</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div></Link>
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
      <Image className="slider" alt="Abandoned Car in Paris TX" filename="night335.jpg" style={{backgroundSize:'', height:'200px', zIndex:'', }} />
        </div><div className="post-content"><h2 className="title">In The City</h2><p className="meta">Todd's favorite subject matter</p></div>
        <div style={{position:'absolute', top:'30px', right:'30px', fontSize:'20px'}}><RiStarLine /></div>
</Link>
    </article>

    

      {/* {data} */}
      
      </div>

    <Link
      className="button"
      to="/galleries/"

      title="See More Galleries"
    >
      See more Galleries
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
