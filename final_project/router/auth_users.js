const express = require('express');
const router = express.Router();

// Mock database for users
let users = [{
  "Username": "Daniel",
  "Password": 123456
}];

// Task 6: Register New User
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'User already exists.' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully.' });
});

// Task 7: Login as a Registered User
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }
  res.status(200).json({ message: 'Login successful.' });
});

module.exports = router;
