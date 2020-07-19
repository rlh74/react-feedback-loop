import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';

class App extends Component {

  componentDidMount(){
    this.getFeedback();
  }

  getFeedback = () => {
    axios.get('feedback').then((response)=>{
      console.log('back from GET:', response.data);
    }).catch((err)=>{
      alert('error getting pizza');
      console.log(err);
    })
  } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Feeling/>
      </div>
    );
  }
}

export default App;
