import React, {Component} from 'react';
import {connect} from 'react-redux';

class Review extends Component {


  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <form>
        <h1>Review your feedback</h1>
        <ul>
          <li>Feeling: {this.props.reduxState.feedbackReducer.feeling}</li>
          <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
          <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
          <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
        </ul>
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