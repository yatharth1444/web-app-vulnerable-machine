// Simulated user database
const users = [
    { id: 1, username: "admin", password: "password123" },
    { id: 2, username: "user", password: "userpass" },
  ];
  
  // Simulated comments database
  const comments = [
    { id: 1, text: "Welcome to the Web Security Lab!" },
  ];
  
  // Functions to interact with the mock database
  const db = {
    getUser: (username, password) => {
      return users.find(user => user.username === username && user.password === password);
    },
    addComment: (text) => {
      const newComment = { id: comments.length + 1, text };
      comments.push(newComment);
      return newComment;
    },
    getComments: () => {
      return [...comments];
    },
    deleteComment: (id) => {
      const index = comments.findIndex(comment => comment.id === id);
      if (index !== -1) {
        comments.splice(index, 1);
        return true;
      }
      return false;
    },
  };
  
  export default db;
  