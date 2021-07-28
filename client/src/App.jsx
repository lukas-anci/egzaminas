import './App.css';
import React, { Component } from 'react';
import MyForm from './components/Myform';
import axios from 'axios';
class App extends Component {
  state = {};

  createNewUser = async (dataToCreate) => {
    console.log('dataToCreate', dataToCreate);

    try {
      const result = await axios.post(
        'http://localhost:4000/api/user/new',
        dataToCreate
      );
      console.log('dataToCreate', dataToCreate);
    } catch (err) {
      console.log(err);
    }
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
