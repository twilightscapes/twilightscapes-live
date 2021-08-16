/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import TimeAgo from 'react-timeago'
const PostCard = ({ data }) => (
  <section>
  <article
    className="post-card"
    // sx={{
    //   bg: "linear-gradient(180deg, #333 1%, #111 80%)",
    // }}
  >
    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />

      </Link>
    ) : (
      <Link to={data.frontmatter.slug}><StaticImage className="featured-image" src="../../static/default-og-image.jpg" alt="AdFree Default Image" /></Link>
    )}
    <div className="post-content">
      <h2 className="title">
        <Link
          to={data.frontmatter.slug}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h2>
      <p>
        <TimeAgo date={data.frontmatter.date}/>
        {/* <time>{data.frontmatter.date}</time> */}
      </p>
    </div>
  </article>
  </section>
)

export default PostCard
