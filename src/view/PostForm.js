import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = { //we will pass this object
      id: new Date(),
      title,
      message
    }
    //dispatch the action
    //Looks like we're gettign  the data form the form in this compopnent
    //Why we dispatch the action here
    //This is THE ACTION, lookm to my project as we do this a slightly diff way, with action in it's own file
    this.props.dispatch({
      type:'ADD_POST',
      data
    })
    //Clear Forms
    this.getTitle.value = '';
    this.getMessage.value = '';


  }

  render() {
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={this.handleSubmit}>
       <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
       <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" placeholder="Enter Post" /><br /><br />
       <button>Post</button>
      </form>
    </div>

);
}
}

export default connect()(PostForm)

// It seems like our data is being captured properly. Great all is left now is to dispatch an action.
//  To do that we will make use of the connect() function provided by the react-redux library.
//  Now this is where things might get a bit tricky but I will try my best to explain it.
//  We know that our state lives inside this object called the store and this store has it’s own set of methods
//  for getting the current state of our application, updating the state of our application and subscribing for changes.
//  We have already discussed one of these methods called dispatch.
//  We need dispatch whenever we want to pass some action
//  to the reducer to tell some sort of event has happened
//  and then the reducer can decide what to do with the state.
//  But to do that we need access to dispatch. Won’t it be great if we somehow got access to the dispatch method as a prop. That is what connect() allows you to do. connect() returns a function which takes in your current component as an argument and returns a new component with dispatch method as it’s prop. The main idea to remember is that connect will ultimately return a new component which has the dispatch method as a prop.The basic syntax for writing connect in your React components is as follows-
