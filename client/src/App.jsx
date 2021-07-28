import './App.css';
import React, { Component } from 'react';
import MyForm from './components/Myform';
class App extends Component {
  state = {};

  createNewUser = (dataToCreate) => {
    console.log('dataToCreate', dataToCreate);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
        </div>
      </div>
    );
  }
}

export default App;
