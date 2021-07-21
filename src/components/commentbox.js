import React, { useEffect } from 'react';
import commentBox from 'commentbox.io';
const BlogPostTemplate = ()=>{
  useEffect(() =>{
    commentBox('5708736052068352-proj')
  },[])

  return(
     <div className="commentbox" />
  )

}