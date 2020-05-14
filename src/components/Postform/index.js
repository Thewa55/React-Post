import React, {useRef} from 'react';
import {useDispatch} from 'react-redux'

function Postform(){
  const dispatch = useDispatch()
  const title = useRef()
  const post = useRef()

  function handleFormSubmit(event){
    event.preventDefault();
    const postTitle = title.current.value
    const postContent = post.current.value
    const data = {
      id: new Date(),
      postTitle,
      postContent,
      editing: false
    }
    dispatch({type: 'ADD_POST', data})
    title.current.value =""
    post.current.value = ""
  }
  
  return(
    <div className="Postform">
      <h1>Create Post</h1>
      <form onSubmit={handleFormSubmit}>
        <input required type="text" placeholder="Enter Post Title" ref={title} />
        <br /> <br />
        <textarea required rows="5" cols="28" placeholder="Enter Post" ref={post}/>
        <br /><br />
        <button>Post</button>
      </form>
    </div>
  )
}

export default Postform;