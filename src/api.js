async function fetchData(endpoint) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(res.status); // 404
  }

  const data = await res.json();
  return data;
}

export async function fetchUsers() {
  return fetchData('https://jsonplaceholder.typicode.com/users')
}

export async function fetchUserTodos() {
  return fetchData('https://jsonplaceholder.typicode.com/todos')
}
