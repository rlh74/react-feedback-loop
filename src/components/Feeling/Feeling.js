import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

  state = {
    value: ''
  }

  handleChangeFor = (event) => {
    console.log('in handleChange:', event.target.value);
    this.setState({
      value: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('in handleClick:', this.state);
    if (this.state.value !== '' && this.state.value > 0){
      this.props.dispatch({type: 'SET_FEELING', payload: this.state});
      this.props.history.push('understanding');
    } else {
      alert ('please enter a positive number');
    }
  }

  render() {
    return (
      <div>
        <form>
        <h1>How are you feeling today?</h1>
        <label htmlFor="feeling">Feeling?</label>
        <input type="number" name="feeling" onChange={this.handleChangeFor}/>
        <button onClick={this.handleClick}>Next</button>
        </form>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Feeling);