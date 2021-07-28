import './App.css';
import React, { Component } from 'react';
import MyForm from './components/Myform';
import axios from 'axios';
import UserList from './components/UserList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.getAllUsers();
  }

  createNewUser = async (dataToCreate) => {
    console.log('dataToCreate', dataToCreate);

    try {
      const result = await axios.post(
        'http://localhost:4000/api/user/new',
        dataToCreate
      );
      console.log('dataToCreate', dataToCreate);
      return dataToCreate.data ? true : false;
    } catch (err) {
      console.log(err);
    }
  };

  getAllUsers = async () => {
    try {
      const allUsers = await axios.get('http://localhost:4000/api/user');
      if (Array.isArray(allUsers.data) && allUsers.data.length) {
        this.setState({ users: allUsers.data });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
          <UserList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
