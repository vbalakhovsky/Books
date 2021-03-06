// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const nameInput = document.getElementById('user-name');
  const userList = document.querySelector('tbody');

  // Create a user
  const insertUser = (userData) => {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(getUsers)
      .catch((err) => console.error(err));
  };

  // Handle when the user form is submitted
  const handleUserFormSubmit = (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
      alert('Please provide a user name');
      return;
    }

    insertUser({
      name: nameInput.value.trim(),
    });
  };

  document
    .getElementById('user-form')
    .addEventListener('submit', handleUserFormSubmit);

  // Event handler for the delete user button
  const handleDeleteButtonPress = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getUsers);
  };

  // Create list row for users
  const createUserRow = (userData) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-user', JSON.stringify(userData));

    // Set each user's ID on the element itself
    tr.id = userData.id;

    const td = document.createElement('td');
    td.textContent = userData.name;
    tr.appendChild(td);

    // Element to show how many posts
    const lengthTd = document.createElement('td');
    if (userData.Posts) {
      lengthTd.textContent = userData.Posts.length;
    } else {
      lengthTd.textContent = '0';
    }
    tr.appendChild(lengthTd);

    // "Go to posts" link
    const postsLink = document.createElement('td');
    postsLink.innerHTML = `<td><a href='/blog?user_id=${userData.id}'>Go to Posts</a></td>`;
    tr.appendChild(postsLink);

    // "Create a post" link
    const createLink = document.createElement('td');
    createLink.innerHTML = `<td><a href='/cms?user_id=${userData.id}'>Create a Post</a></td>`;
    tr.appendChild(createLink);

    // "update a book" link
    const updateLink = document.createElement('td');
    updateLink.innerHTML = `<td><a href='/book?user_id=${userData.id}'>Update Book</a></td>`;
    tr.appendChild(updateLink);

    // "Delete user" link
    const deleteLink = document.createElement('td');
    deleteLink.innerHTML = `<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>`;
    deleteLink.addEventListener('click', handleDeleteButtonPress);
    tr.appendChild(deleteLink);

    // Return the table row
    return tr;
  };

  // Helper function to render content when there are no users
  const renderEmpty = () => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger');
    alertDiv.textContent = 'Must have at least one user to post';
    alertDiv.id = 'removeMe';
    alertDiv.style.marginRight = '5px';
    return alertDiv;
  };

  const renderUserList = (rows) => {
    userList.innerHTML = '';

    if (rows.length) {
      if (document.getElementById('removeMe')) {
        document.getElementById('removeMe').remove();
      }
      rows.forEach((row) => userList.append(row));
    } else {
      document.querySelector('.user-container').appendChild(renderEmpty());
    }
  };

  // Grab all the users
  const getUsers = () => {
    console.log('Get users is getting called');
    fetch('/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting users:', users);
        const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createUserRow(data[i]));
        }
        renderUserList(rowsToAdd);
        nameInput.value = '';
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get the list of users
  getUsers();
});
