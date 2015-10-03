import React, { Component, PropTypes } from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Super App</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
