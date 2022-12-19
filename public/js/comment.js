// creates async function for commentFormHandler for postId & body
const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;
// Create .json fetch for /comment from /api
  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();
  }
};

// Creates submit for commentFormHandler to document
document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
