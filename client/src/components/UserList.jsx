import React, { Component } from 'react';
import UserItem from './UserItem';
class UserList extends Component {
  state = {};
  render() {
    if (!this.props.users.length)
      return <h2>Nėra vartotojų, prašome sukurti vieną </h2>;
    return (
      <div className="d-flex flex-wrap">
        {this.props.users.map((u) => (
          <UserItem
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
            key={u._id}
            user={u}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
