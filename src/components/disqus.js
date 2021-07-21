import * as React from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import useSiteMetadata from '../utils/site-metadata'
import { useLocation } from '@reach/router'




const PostTemplate = () => {
  const location = useLocation()
  let disqusConfig = {
    url: location,
    // identifier: post.id,
    // title: post.title,
  }
  return (
    <>
      
      <CommentCount config={disqusConfig} placeholder={' '} />
     
      <Disqus config={disqusConfig} />
    </>
  )
}

export default PostTemplate
