import React from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from '../api';

export default class UsersContainer extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetchUsers()
      .then(data => {
        const users = data
        this.setState({ users })
      })
      .catch(err => console.log('Ooops, error', err.message))
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => <li key={user.id}>
          <Link to={`/profile/${user.id}`}>{user.name}</Link>
          </li>)}
      </ul>
    )
  }
}
