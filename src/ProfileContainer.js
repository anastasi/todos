import React from "react";


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
        const userTodos = data
        this.setState({ userTodos })
      })
      .catch(err => console.log('Ooops, error', err.message))
  }

  render() {
    return (
      <ul>
       <h2>ProfileContainer {this.props.match.params.id}</h2>
       <ul>
        { this.state.userTodos.map(todo => <li>
            {todo.title}
          </li>)}
      </ul>
      </ul>
    )
  }
}
