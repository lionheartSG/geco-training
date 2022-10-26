import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
// -----------------------------------Initialization LifeCycle -------------------------------------------------------------------------------
  constructor(){
    super()
    this.state = {
      firstName: 'alina',
      post: []
    }
  }
// -----------------------------------Mount LifeCycle -------------------------------------------------------------------------------
// this one also deprecated
//API call, it will update state before rendering the data
//this is like useEffect hook
// This is called once on the server side, if server side rendering is present, and one the client side.
// You can use it to do API calls which do not have direct effect on the components, for example getting oAuth tokens
  componentWillMount = () => {
    console.log("component will mount at componentWillMount (But this is deprecated)") //This will not run if there is getDerivedStateFromProps, or getSnapshotBeforeUpdate
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('getDerivedStateFromProps from Mount Lifecycle. This will run before any Update lifestyle', state.firstName)
    return "Hello from getDerivedStateFromProps"
  }

//API calls, modals, update the state (run something when componentDidMount like useEffect) or even addEventListener
//This function is mostly used for calling API's
//Components state initializations which are based on the props based by parents
  componentDidMount = () => {
    this.setState({
      firstName: 'alex',
    })
    console.log("Alex is now updated inside state when component did mount at componentDidMount")
    // axios.get('url')
    // .then(res => {

    // })
    // .catch(err ={

    // })
  }



  // Updation life cycle
  handleClick = () => {
    this.setState({
      firstName: 'harry'
    })
  }


// -----------------------------------Update LifeCycle -------------------------------------------------------------------------------

// This method is invoked before the render happens when new props or states are received. Here we can return false if the re-render is not required.
// We can see this as a performance optimisation tool. In case of frequent re-rendering of parent component, this method should be used to avoid unnecessay update to current component
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('Data will be updated at shouldComponentUpdate', nextState.firstName)
    // if (this.state.firstName === nextState.firstName) {
    return true //if return true, "componentDidUpdate" will run. if return false, it will not run
    // }
  }

  //deprecated so don't use anymore
  //This function is called everytime a component is updated, not called when component mounts
  componentWillUpdate = (nextProps, nextState) => {
    console.log()
  }

  //new
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("This is from getSnapShotBeforeUpdate", prevState.firstName)
    return "Hello from Snapshot"
  }

  //This is used in conjunction with getSnapshot before update
  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log('This is the previous data before shouldComponentUpdate with getSnapshot', prevState.firstName, snapshot)
  }

//One possible scenario is to inform user that certain state has been updated and to tell them the previous state at first render.
  componentDidUpdate = (prevProps, prevState) => {
    console.log('This is the previous data before shouldComponentUpdate', prevState.firstName)
  }

  // -----------------------------------Unmount LifeCycle -------------------------------------------------------------------------------
  // any event listeners or timers used in the component to be cleaned here. Use removeEventListener.
  componentWillUnmount = () => {
    ele.removeEventListener
  }

  render(){
    // const postList = this.state.post.length ? (this.state.post.map((info => {
    //   return (
    //     <React.Fragment key={info.id}>
    //       <p>UserID: {info.userID}</p>
    //       <p>Body: {info.body}</p>
    //       <p>Title: {info.title}</p>
    //     </React.Fragment>
    //   )
    // }))) : (<p>No Post Yet</p>)
    return(
      <React.Fragment>
        {this.state.firstName}
        <button onClick={this.handleClick}>Submit</button>
      </React.Fragment>
    )
  }
}

export default App;
