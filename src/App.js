import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class TextField extends Component {

}
class FormElements extends Component {
  render() {
    return (
      <div>
        <TextField />
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Inline edit</h2>
        </div>
      <FormElements />
      </div>
    );
  }
}

export default App;
