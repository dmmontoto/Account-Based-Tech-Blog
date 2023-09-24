const addCommentHandler = async (event) => {
    event.preventDefault();
    console.log("Test");
    const post_id = document.querySelector('#post-id').value.trim();
    const description = document.querySelector('#comment-description').value.trim();
    
    if (post_id && description) {
      const response = await fetch(`/api/posts/${post_id}`, { // Use the correct API endpoint with the post_id
        method: 'POST',
        body: JSON.stringify({ description, post_id }), // Pass both description and post_id
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload(); // Reload the page to show the new comment
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  
// Function to handle comment delete button click
const deleteCommentHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.reload(); // Reload the page to remove the deleted comment
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', addCommentHandler);

// document
//   .querySelector('.post-list')
//   .addEventListener('click', delButtonHandler);  
  