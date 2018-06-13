import React from "react";
import { Link } from "react-router-dom";

async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(res.status); // 404
  }

  const data = await res.json();
  return data;
}

export default class UsersContainer extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetchUsers('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        const users = data
        this.setState({ users })
      })
      .catch(err => console.log('Ooops, error', err.message))
  }

  render() {
    return (
      <ul>
        { this.state.users.map(user => <li>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>)}
      </ul>
    )
  }
}
