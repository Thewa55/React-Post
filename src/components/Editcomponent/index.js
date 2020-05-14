import React, {useRef} from 'react';
import {useDispatch} from 'react-redux'

function Editcomponent(props) {
  const dispatch = useDispatch()
  const title = useRef()
  const post = useRef()

  function handleEdit(event){
    event.preventDefault();
    const newTitle = title.current.value
    const newContent = post.current.value
    const data = {
      newTitle,
      newContent
    }
    dispatch({type: 'UPDATE_POST', id: props.post.id, data: data})
  }
  
  return(
    <div>
      <form onSubmit={handleEdit}>
        <input required type="text" ref={title} defaultValue={props.post.postTitle} ></input>
        <textarea required typeof="text" ref={post} defaultValue={props.post.postContent}></textarea>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Editcomponent