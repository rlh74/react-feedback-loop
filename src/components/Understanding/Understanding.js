import React, {Component} from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {

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
      this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state});
      // this.props.history.push('support');
    } else {
      alert ('please enter a positive number');
    }
  }

  render() {
    return (
      <div>
        <form>
        <h1>How are you understanding the content?</h1>
        <label htmlFor="understanding">Understanding?</label>
        <input type="number" name="understanding" onChange={this.handleChangeFor}/>
        <button onClick={this.handleClick}>Next</button>
        </form>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Understanding);