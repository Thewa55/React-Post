import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux'

function Editcomponent(props) {
  const dispatch = useDispatch()
  const title = useRef()
  const post = useRef()
  const [newUserTitle, setNewUserTitle] = useState(props.post.postTitle)
  const [newPost, setNewPost] = useState(props.post.postContent)

  function handleEdit(event){
    event.preventDefault();
    const newTitle = newUserTitle
    const newContent = newPost
    const data = {
      newTitle,
      newContent
    }
    dispatch({type: 'UPDATE_POST', id: props.post.id, data: data})
  }

  return(
    <div>
      <form onSubmit={handleEdit}>
        <input required type="text" ref={title} defaultValue={props.post.postTitle} onChange={e => setNewUserTitle(e.target.value)}></input>
        <textarea required typeof="text" ref={post} defaultValue={props.post.postContent} onChange={e => setNewPost(e.target.value)}></textarea>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Editcomponent