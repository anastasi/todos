import React from "react";
import BackButton from "./Components/BackButton";


async function fetchUserTodo(endpoint) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(res.status); // 404
  }

  const data = await res.json();
  return data;
}

export default class ProfileContainer extends React.Component {
  state = {
    userTodos: []
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    console.log(userId)
    fetchUserTodo('https://jsonplaceholder.typicode.com/todos/')
      .then(data => {
        const userTodos = data.filter( todo => todo.userId == userId)
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
