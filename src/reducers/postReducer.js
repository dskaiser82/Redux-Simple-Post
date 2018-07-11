
const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return state.concat([action.data]);
    case 'DELETE_POST':
      return state.filter((post)=>post.id !== action.id);

    //This one just shows the Edit Compnent by turning Edit Boolean from  Postform.js  component << the data object
    //if post.id match >>  give me new post object, change post edit boolean,  >> if not, just give me post.  This will end up showing Edit Compnent
    case 'EDIT_POST':
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing} :post)

    //This one on form submit we are grabbing NEW Values (also changing editing Boolean)
    case 'UPDATE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             message:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      })
    default:
      return state;
  }
}
export default postReducer;



// EDIT_POST
// Here we are using Array.prototype.map
// to loop over each item and then check the id
//  of the post with the id that was passed in the action.
//  If there is a match then return a new object but
//  change the value of editing to true if it was false or vice-versa.
//  If there is no match then just return the object as it is.
