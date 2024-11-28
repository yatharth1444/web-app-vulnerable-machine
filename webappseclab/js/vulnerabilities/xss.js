// function handleXSSComment(event) {
//     event.preventDefault();
//     const comment = document.getElementById('comment').value;
//     const commentList = document.getElementById('comments-list');
  
//     // Add raw user input directly to the DOM (vulnerability)
//     commentList.innerHTML += `<p>${comment}</p>`;
//     document.getElementById('comment').value = "";
//   }
async function handleXSSComment(event) {
    event.preventDefault();
  
    const comment = document.getElementById('comment').value;
  
    try {
      const response = await fetch('http://localhost:8080/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
  
      const result = await response.json();
      if (response.ok) {
        fetchComments(); // Refresh the comments list
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function fetchComments() {
    try {
      const response = await fetch('http://localhost:8080/comments');
      const comments = await response.json();
      const commentsList = document.getElementById('comments-list');
      commentsList.innerHTML = comments.map(comment => `<p>${comment}</p>`).join('');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  