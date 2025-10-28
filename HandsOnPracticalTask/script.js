const loadBtn = document.getElementById('loadBtn');
const searchBox = document.getElementById('searchBox');
const userList = document.getElementById('userList');

let allUsers = []; // store fetched users for filtering

loadBtn.addEventListener('click', loadUsers);
searchBox.addEventListener('input', filterUsers);

function loadUsers() {
  userList.innerHTML = '<div class="spinner"></div>'; // show spinner

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      allUsers = users; // store for filtering
      displayUsers(users);
    })
    .catch(error => {
      userList.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
}

function displayUsers(users) {
  userList.innerHTML = ''; // clear old content
  if (users.length === 0) {
    userList.innerHTML = '<p>No users found.</p>';
    return;
  }

  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'user';
    div.innerHTML = `
      <strong>${user.name}</strong><br>
      📧 ${user.email}<br>
      🏙️ ${user.address.city}
    `;
    userList.appendChild(div);
  });
}

function filterUsers() {
  const searchTerm = searchBox.value.toLowerCase();
  const filtered = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm)
  );
  displayUsers(filtered);
}