import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

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
    this.props.dispatch({type: 'SET_COMMENTS', payload: this.state});
    this.props.history.push('review');
  }

  render() {
    return (
      <div>
        <form>
        <h1>Any comments you want to leave?</h1>
        <label htmlFor="comennts">Comments?</label>
        <input type="text" name="comennts" onChange={this.handleChangeFor}/>
        <button onClick={this.handleClick}>Next</button>
        </form>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Comments);