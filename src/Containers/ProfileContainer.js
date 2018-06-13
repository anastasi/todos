import React from "react";
import BackButton from "../Components/BackButton";
import { fetchUserTodos } from '../api';

export default class ProfileContainer extends React.Component {
  state = {
    userTodos: []
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    fetchUserTodos()
      .then(data => {
        const userTodos = data.filter( todo => todo.userId == userId )
        this.setState({ userTodos })
      })
      .catch(err => console.log('Ooops, error', err.message))
  }

  render() {
    return (
      <ul>
       <h2>ProfileContainer {this.props.match.params.id}</h2>
       <BackButton/>
       <ul>
        { this.state.userTodos.map(todo => <li key={todo.id}>
            {todo.title}
          </li>)}
      </ul>
      </ul>
    )
  }
}
