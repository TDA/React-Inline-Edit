import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class TextField extends Component {
  render() {
    return (
        <input type="text" name={this.props.fieldName} id={this.props.fieldName}  className={this.props.className} onInput={this.props.onNameChange} onBlur={this.props.onBlur}/>
    );
  }
}

class SpanField extends Component {
  render() {
    return (
        <span id={this.props.fieldName} className={"editable " + this.props.className} onClick={this.props.onEditableFieldClick}>{this.props.fieldValue}</span>
    );
  }
}

class EditableField extends Component {
  constructor(props) {
    super(props);
    this.fieldName = props.fieldName;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleEditableFieldClick = this.handleEditableFieldClick.bind(this);
    this.state = {
      hideInputField: false,
      hideEditableField: true
    };
  }

  handleNameChange(e) {
    this.setState({fieldValue: e.target.value});
  }

  handleBlur(e) {
    this.setState({
      hideInputField: true,
      hideEditableField: false
    });
  }

  handleEditableFieldClick(e) {
    this.setState({
      hideInputField: false,
      hideEditableField: true
    });
  }

  setHiddenState(isHidden) {
    return isHidden? "hidden" : "";
  }

  render() {
    return (
      <div>
        <label htmlFor={this.fieldName}>{this.fieldName}: </label>
        <TextField fieldName={this.fieldName}
                   onNameChange={this.handleNameChange}
                   onBlur={this.handleBlur}
                   className={this.setHiddenState(this.state.hideInputField)}
        />
        <SpanField fieldName={this.fieldName + "Editable"}
                   fieldValue={this.state.fieldValue}
                   onEditableFieldClick={this.handleEditableFieldClick}
                   className={this.setHiddenState(this.state.hideEditableField)}
        />
      </div>
    );
  }
}

class FormElements extends Component {
  render() {
    return (
      <div>
        <EditableField fieldName="Name"/>
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
