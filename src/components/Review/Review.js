import React, {Component} from 'react';
import {connect} from 'react-redux';

class Review extends Component {


  handleClick = (event) => {
    event.preventDefault();
    // this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <form>
        <h1>Review your feedback</h1>
        <button onClick={this.handleClick}>Done</button>
        </form>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Review);