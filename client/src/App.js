import React, { Component } from 'react';
import Aux from './hocs/Aux';
import Main from './pages/main';

class App extends Component {
  render() {
    return (
      <Aux>
        <Main />
      </Aux>
    );
  }
}

export default App;
