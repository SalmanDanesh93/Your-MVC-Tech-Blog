// Creates const async function() for signupFormHandler

const signupFormHandler = async function(event) {
  event.preventDefault();
  const usernameEl = document.querySelector('#username-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');
// Stringifies POSTs usernameEl & passwordEl to JSON
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

// posts signupFormHandler to document for #signup-form
document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
