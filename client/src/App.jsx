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
      console.log('result', result);
      this.getAllUsers();

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
      } else {
        this.setState({ users: [] });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  deleteUser = async (id) => {
    try {
      const deleteUser = await axios.delete(
        'http://localhost:4000/api/user/delete/' + id
      );
      console.log('deleteUser.data', deleteUser.data);
      // if (deleteUser.data)
      this.getAllUsers();
    } catch (error) {
      console.error(error);
    }
  };

  editUser = async (id, updatedData) => {
    console.log('updatedData', id, updatedData);
    try {
      const updatedResult = await axios.put(
        'http://localhost:4000/api/user/edit/' + id,
        updatedData
      );
      if (updatedResult.data) this.getAllUsers();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
          <UserList
            onEdit={this.editUser}
            onDelete={this.deleteUser}
            users={this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App;
