import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post'

function Allpost(){

  const posts = useSelector( state => ({
    posts: state
  }))

  return(
    <div>
      <h1>All Posts</h1>
      {posts.posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  )
}

export default Allpost