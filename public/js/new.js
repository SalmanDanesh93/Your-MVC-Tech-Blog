// Creates async function() for newFormHandler
const newFormHandler = async function(event) {
  event.preventDefault();

  // Creates object for title and body in document based on user input
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

// posts newFormHandler to document with querySelector #new-post-form
document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
