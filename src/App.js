import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class TextField extends Component {
  constructor(props) {
    super(props);
    this.fieldName = props.fieldName;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {};
  }

  handleNameChange(e) {
    this.setState({fieldValue: e.target.value});
  }

  handleBlur(e) {

  }

  render() {
    return (
      <div>
        <label htmlFor={this.fieldName}>{this.fieldName}</label>
        <input type="text" name={this.fieldName} id={this.fieldName} onInput={this.handleNameChange} onBlur={this.handleBlur}/>
        <span id="{this.fieldName}+Editable">{this.state.fieldValue}</span>
      </div>
    );
  }
}
class FormElements extends Component {
  render() {
    return (
      <div>
        <TextField fieldName="Name" />
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
