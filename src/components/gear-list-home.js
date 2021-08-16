/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine, RiStarLine } from "react-icons/ri"
import { StaticImage } from "gatsby-plugin-image"

import PostCard from "./post-card"


export default function GearListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
<div>





<h2 style={{fontSize:'150%', marginBottom:'1rem'}}>
      Latest in <strong>Posts</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    
<section className="home-posts">
   
     <div className="grids col-1 sm-2 lg-3">
      {data}
      
     </div>

  </section>
  
  <Link
      className="button"
      to="/posts/"

      title="See More Galleries"
    >
      See more posts
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>


</div>
)
