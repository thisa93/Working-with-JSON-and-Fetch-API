async function loadUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

loadUsers();