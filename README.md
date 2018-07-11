
#DK We are following easy Redux Crud example
https://codeburst.io/redux-a-crud-example-abb834d763c9

npm start

#Top Level What We decide

`Reducers`
<< Only have One for POSTS


`Actions`
<< Maybe for Simplicty, but no Action file, just used Dispatch to chuck the Action to the Reducer we used
<< Really, look at PostForm.js, on Form Submit, chuck form input values to a data Object, and data object we get into Dispatch Action
<< This makes sense because all an Action is 1) The Type (ie the event) 2) The Payload of data

`index.js`
<< Starting Point
<< Remember Provider
   ReDux Means we needed to Use Provider to wrap our components here
<< React Dev Tools,
   did an NPM install, also needed Apply Middleware, to use it
<< Store
   Declared Store here, also only had one Reducer, so didnt need to use combine Reducers (Store takes a Reducver as an argument)

`App.js`
<<Main App
<< Simple, only uses 1) PostForm Component  2) AllPost Compnent
<< Doesn't need Connect


`PostForm.js`
<< Just the Form
<< But First time we declare data object that will be fed to the store
<< Data object also has a boolean to control EditComponent
<< First one we grab form values and push to data
<< Then we dispatch the Action of ADD POST with that data, send data to the store
<< Uses Connect as it needs access to Store Data

`AllPost.js`
<< Either loops through all Posts (Post Component) OR Shows Edit Component.
<< For Edit Component, see the boolean in our Data Object (PostForm.js)
<< How it does mapStateToProps here
<< Uses mapStateToProps to grab data from Store and Use it
<< export default connect(mapStateToProps)(AllPost);

`Post.js`
<< Has Button to DELETE Action and EDIT_POST action ie show Edit Component
<<Uses Connect 

`EditComponent.js`
<< Uses UPDATE action to give our data object NewTitle, NewMessage
<<On Submit dispatches Update Action to update the store
<<Uses Connect
