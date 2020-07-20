import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    // this.getFeedback();
  }
  // for admin section
  // getFeedback = () => {
  //   axios.get('feedback').then((response)=>{
  //     console.log('back from GET:', response.data);
  //   }).catch((err)=>{
  //     alert('error getting pizza');
  //     console.log(err);
  //   })
  // } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
        <Route exact path="/" component={Home} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        {/* <Home/> */}
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);