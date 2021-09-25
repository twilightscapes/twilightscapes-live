/** @jsx jsx */
import { jsx } from "theme-ui"
// import { Link } from "gatsby"
// import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"


import PostCard from "./post-card"


export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
<div>





{/* <h2 style={{fontSize:'200%', marginBottom:'1rem'}}>
      Latest <strong>Experiences</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2> */}
    
<div>

        



{data}

 
</div>

    

  {/* <div style={{display:'flex', justifyContent:'center', marginBottom:'20vh'}}>
  <Link
      className="button"
      to="/experiences/"
      title="See More Galleries"
      style={{color:'#fff'}}
    >
      See More Experiences?
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
</div> */}

</div>
)
