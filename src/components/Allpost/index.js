import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post'
import Editcomponent from '../Editcomponent'

function Allpost(){

  const posts = useSelector( state => ({
    posts: state
  }))

  return(
    <div>
      <h1>All Posts</h1>
      {posts.posts.map(post => 
        <div key={post.id}>
          { post.editing ? <Editcomponent post={post} key={post.id} /> :
          <Post key={post.id} post={post}/>}
        </div>)}
    </div>
  )
}

export default Allpost