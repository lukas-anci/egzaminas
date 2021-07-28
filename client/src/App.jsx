import './App.css';
import React, { Component } from 'react';
import MyForm from './components/Myform';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm />
        </div>
      </div>
    );
  }
}

export default App;
