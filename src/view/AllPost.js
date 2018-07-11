import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './Post';

import EditComponent from './EditComponent';

class AllPost extends Component {
  render() {
    return (
      <div>
       <h1>All Posts</h1>
       {/*We're using the Post Component here*/}
       {this.props.posts.map((post) => (
         <div key={post.id}>
          {post.editing ? <EditComponent post={post} key={post.id}/> :
          <Post key={post.id} post={post}/>}
         </div>
       ))}


        {console.log(this.props)}
   </div>
    )
  }
}

{/*Mapping State to accessible Prop for this compnent here */}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
