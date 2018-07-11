import React, { Component } from 'react';
import {connect} from 'react-redux';

import Post from './Post';

class AllPost extends Component {
  render() {
    return (
      <div>
     <h1>All Posts</h1>
     {/*We're using the Post Component here*/}
     {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
      {console.log(this.props)}
   </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
