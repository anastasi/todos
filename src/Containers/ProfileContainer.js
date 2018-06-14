import React from "react";
import { fetchUserTodos } from '../api';
import List from "../Components/List";
import ProfileListItem from "../Components/ProfileListItem";


export default class ProfileContainer extends React.Component {
  state = {
    userTodos: []
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    fetchUserTodos()
      .then(data => {
        const userTodos = data.filter( todo => parseInt(todo.userId, 10) === parseInt(userId, 10) );
        this.setState({ userTodos })
      })
      .catch(err => console.log('Ooops, error', err.message))
  }

  render() {
    const { username } = this.props.location.state

    return (
      <div>
        <List
          items={this.state.userTodos}
          title={ username }
          listItem={ProfileListItem}
          showBackButton="true" />
      </div>
    )
  }
}
