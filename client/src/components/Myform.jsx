import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    password: '',
  };
  render() {
    return (
      <div className="w-50">
        <h2>Sukurkite naują vartotoją</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Vardas"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder="Amžius"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="El. paštas"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Slaptažodis"
            />
          </div>
          <button className="btn btn-primary my-4">Sukurti</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
