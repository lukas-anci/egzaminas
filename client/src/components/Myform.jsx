import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    password: '',
  };

  handleSubmitLocal = (e) => {
    const { name, age, email, password } = this.state;
    e.preventDefault();
    console.log('stoppp');
    const dataToCreate = {
      name,
      age,
      email,
      password,
    };
    const success = this.props.onCreateNewUser(dataToCreate);
    if (success) this.clearInputs();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearInputs = () => {
    this.setState({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { state: s } = this;
    return (
      <div className={this.props.user ? 'card-body' : 'w-50'}>
        {!this.props.user ? <h2>Sukurkite naują vartotoją</h2> : ''}

        <form onSubmit={this.handleSubmitLocal} autoComplete="off">
          <div className="form-group">
            <input
              value={s.name}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="name"
              placeholder="Vardas"
            />
          </div>
          <div className="form-group">
            <input
              value={s.age}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="age"
              placeholder="Amžius"
            />
          </div>
          <div className="form-group">
            <input
              value={s.email}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="email"
              placeholder="El. paštas"
            />
          </div>
          <div className="form-group">
            <input
              value={s.password}
              onChange={this.handleInput}
              type="password"
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
