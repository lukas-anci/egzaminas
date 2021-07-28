import React, { Component } from 'react';
import MyForm from './Myform';
class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOn: false,
    };
  }

  handleEdit = (editData) => {
    this.state.isEditOn && this.props.onEdit(this.props.user._id, editData);
    this.setState({ isEditOn: !this.state.isEditOn });
  };

  render() {
    const { user: u } = this.props;
    return (
      <div className=" form-container">
        {this.state.isEditOn ? (
          <MyForm user={u} onEdit={this.handleEdit} />
        ) : (
          <React.Fragment>
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">{u.name}</h5>
                <p className="card-text">{u.age}</p>
                <p className="card-text">{u.email}</p>
                <p className="card-text">{u.password}</p>
              </div>
              <div className="card-footer">
                <button onClick={this.handleEdit} className="btn btn-success">
                  Redaguoti
                </button>
                <button
                  onClick={() => this.props.onDelete(u._id)}
                  className="btn btn-danger"
                >
                  Ištrinti
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default UserItem;
