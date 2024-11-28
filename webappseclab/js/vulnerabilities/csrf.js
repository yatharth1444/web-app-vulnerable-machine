function handleCSRFSetup() {
    const commentList = document.getElementById('comments-list');
    commentList.innerHTML = `
      <p id="comment1">This is a test comment. <button onclick="deleteComment('comment1')">Delete</button></p>
    `;
  }
  
  function deleteComment(commentId) {
    const comment = document.getElementById(commentId);
    if (comment) {
      comment.remove(); // Vulnerable action
      alert("Comment deleted!");
    }
  }
  