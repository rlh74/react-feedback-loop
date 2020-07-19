import React, {Component} from 'react';

class Feeling extends Component {
  render() {
    return (
      <div>
        <h1>How are you feeling today?</h1>
        <label htmlFor="feeling">Feeling?</label>
        <input type="number" name="feeling"/>
      </div>
    )
  }
}

export default Feeling;