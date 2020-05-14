import React from 'react'
import {useDispatch} from 'react-redux'

function Post(props){
  const dispatch = useDispatch()
  
  
  return(
    <div>
      <h2>{props.post.postTitle}</h2>
      <p>{props.post.postContent}</p>
      <button>Edit</button>
      <button onClick={() => dispatch({type: "DELETE_POST", id: props.post.id})}>Delete</button>
    </div>
  )
}

export default Post;