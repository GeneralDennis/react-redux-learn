import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../users/users.actions'

class Users extends Component {
  onUserCreate = () => {
    const id = Math.round(Math.random()* 1000000);
    const newUser = {
      id,
      name: `User #${id}`
    }
    this.props.createUser(newUser)
  }


  render() {
    const { users, deleteUser } = this.props;

    return (
      <div>
        <button onClick={this.onUserCreate}>Create User</button>
        <ul>
          {users.map(user=> (
            <li key={user.id}>
              {user.name}
              <button onClick={()=>deleteUser(user.id)}>x</button>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.users.usersList
  }
}

const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
}

const connector = connect(mapState, mapDispatch);

// const connectedUsers = connector(Users)

// export default connectedUsers
export default connector(Users)