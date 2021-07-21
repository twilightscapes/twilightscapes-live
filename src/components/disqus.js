import * as React from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import useSiteMetadata from '../utils/site-metadata';

const PostTemplate = () => {
  let disqusConfig = {
    url: `https://twilightscapes.com`,
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
