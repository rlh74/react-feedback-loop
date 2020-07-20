import React, {Component} from 'react';

class Home extends Component {

  handleClick = () => {
    console.log('in handleClick');
    this.props.history.push('feeling');
  }
  render() {
    return (
      <div>
        <h1>Press Go to Begin Survey</h1>
        <button onClick={this.handleClick}>Go</button>
      </div>
    )
  }
}



export default Home;