import React from 'react'

function Post(props){
  return(
    <div>
      <h2>{props.post.postTitle}</h2>
      <p>{props.post.postContent}</p>
    </div>
  )
}

export default Post;