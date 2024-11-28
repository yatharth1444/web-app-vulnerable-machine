const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data

const users = [{ id: 1, username: 'admin', password: 'password123' }];
const comments = [];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Login Successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Comments route (for XSS)
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json({ success: true, message: 'Comment added!' });
});

app.listen(8080, () => console.log('Server running on http://localhost:8080'));
