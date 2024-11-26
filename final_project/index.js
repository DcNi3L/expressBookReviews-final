const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routers
const authUsersRouter = require('./router/auth_users');
const booksRouter = require('./router/booksdb');

// Route setup
app.use('/auth', authUsersRouter);  // Routes for user authentication
app.use('/', booksRouter);         // Routes for book-related operations

// Server Listener
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
