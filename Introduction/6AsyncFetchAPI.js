async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    //users.forEach(user => console.log(user));
    console.log(JSON.stringify(users, null, 3));
    //console.log(users);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

JSON.stringify()
fetchUsers();