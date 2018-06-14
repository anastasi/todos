import React from "react";
import { fetchUsers } from '../api';
import List from '../Components/List';
import UserListItem from '../Components/UserListItem';

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
      <List
        items={this.state.users}
        title="Rebels"
        listItem={UserListItem} />
    )
  }
}
