// app.js

let cachedUser = null;

async function loadUser() {
  const userId = document.getElementById('userId').value;

  if (userId === '') {
    showResult('Please enter a valid ID');
    return;
  }

  if (isNaN(userId)) {
    showResult('ID must be a number', true);
    return;
  }

  if (Number(userId) <= 0) {
    showResult('ID must be positive', true);
    return;
  }

  try {
    const user = await fetchUser(userId);
     showResult(`${user.name} - ${user.email} - ${user.website}`);

  } catch (error) {
    showResult('Error fetching user', true);
  }
}

function showResult(message, isError = false) {
  const el = document.getElementById('result');
  el.className = isError ? 'error' : '';
  el.textContent = message;
}
