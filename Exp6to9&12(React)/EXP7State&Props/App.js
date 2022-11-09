// import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Test'
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  }

  onSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    console.log(value);
  }
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div>This is the value getting from input field.</div>
        {/* <input type="text" name="test" value={this.state.value} onChange={this.change} />  */}
        <form onSubmit={this.onSubmit}>
          <input name="Test" onChange={this.onChange} value={value} />
          {/* <input onChange={this.onChange} value={value}/> */}
        </form>
      </div>
    );
  }
}
