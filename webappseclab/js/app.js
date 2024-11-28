import db from './db.js';

// Handle SQL Injection Simulation
function simulateSQLInjection(username, password) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Executed Query:", query);

  const user = db.getUser(username, password);
  return user ? "Login Successful!" : "Invalid Credentials.";
}

function handleSQLInjectionLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const result = simulateSQLInjection(username, password);
  document.getElementById('login-result').innerText = result;
}

// Handle XSS Simulation
function handleXSSComment(event) {
  event.preventDefault();
  const comment = document.getElementById('comment').value;
  const commentList = document.getElementById('comments-list');

  const newComment = db.addComment(comment);

  // Add raw user input directly to the DOM (vulnerability)
  commentList.innerHTML += `<p id="comment${newComment.id}">${comment}</p>`;
  document.getElementById('comment').value = "";
}

// Handle CSRF Simulation
function handleCSRFSetup() {
  const commentList = document.getElementById('comments-list');
  const comments = db.getComments();

  commentList.innerHTML = comments
    .map(
      (comment) =>
        `<p id="comment${comment.id}">${comment.text} <button onclick="deleteComment(${comment.id})">Delete</button></p>`
    )
    .join("");
}

function deleteComment(commentId) {
  if (db.deleteComment(commentId)) {
    const comment = document.getElementById(`comment${commentId}`);
    if (comment) comment.remove();
    alert("Comment deleted!");
  } else {
    alert("Comment not found!");
  }
}

export { handleSQLInjectionLogin, handleXSSComment, handleCSRFSetup };
