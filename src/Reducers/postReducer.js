const postReducer =(state = [], action) =>{
  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data])
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id)
    case 'EDIT_POST':
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
    case 'UPDATE_POST':
      return state.map(post => {
        if(post.id === action.id){
          console.log(action.data)
          return {
            ...post,
            postTitle: action.data.newTitle,
            postContent: action.data.newContent,
            editing: !post.editing 
          }
        }
        return post
      })
    default:
      return state
  }
}

export default postReducer;