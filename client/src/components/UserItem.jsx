import React, { Component } from 'react';
class UserItem extends Component {
  state = {};
  render() {
    const { user: u } = this.props;
    return (
      <div className="card m-2">
        <div className="card-body">
          <h5 className="card-title">{u.name}</h5>
          <p className="card-text">{u.age}</p>
          <p className="card-text">{u.email}</p>
          <p className="card-text">{u.password}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Redaguoti</button>
          <button
            onClick={() => this.props.onDelete(u._id)}
            className="btn btn-danger"
          >
            Ištrinti
          </button>
        </div>
      </div>
    );
  }
}

export default UserItem;
