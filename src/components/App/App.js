import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import axios from 'axios';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import {connect} from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.getFeedback();
  }
  // for admin section
  getFeedback = () => {
    axios.get('/feedback').then((response)=>{
      console.log('back from GET:', response.data);
    }).catch((err)=>{
      alert('error getting pizza');
      console.log(err);
    })
  } 

  postFeedback = (data) => {
    console.log('ready to post:', data);
  }
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
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/review" component={Review} />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);