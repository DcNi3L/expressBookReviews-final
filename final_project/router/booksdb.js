const express = require('express');
const router = express.Router();

// Mock database for books and reviews
let books = [
      { isbn: '12345', title: 'Book One', author: 'Author One', reviews: [] },
      { isbn: '67890', title: 'Book Two', author: 'Author Two', reviews: [] }
];

// Task 1: Get the book list available in the shop
router.get('/books', (req, res) => {
      res.status(200).json(books);
});

// Task 2: Get the books based on ISBN
router.get('/books/:isbn', (req, res) => {
      const isbn = req.params.isbn;
      const book = books.find(b => b.isbn === isbn);
      if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
      }
      res.status(200).json(book);
});

// Task 3: Get all books by Author
router.get('/books/author/:authorName', (req, res) => {
      const authorName = req.params.authorName.toLowerCase();
      const authorBooks = books.filter(b => b.author.toLowerCase() === authorName);
      res.status(200).json(authorBooks);
});

// Task 4: Get all books based on Title
router.get('/books/title/:title', (req, res) => {
      const title = req.params.title.toLowerCase();
      const titleBooks = books.filter(b => b.title.toLowerCase().includes(title));
      res.status(200).json(titleBooks);
});

// Task 5: Get book Review
router.get('/books/:isbn/review', (req, res) => {
      const isbn = req.params.isbn;
      const book = books.find(b => b.isbn === isbn);
      if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
      }
      res.status(200).json(book.reviews);
});

// Task 8: Add/Modify a book review
router.post('/books/:isbn/review', (req, res) => {
      const { username, review } = req.body;
      const isbn = req.params.isbn;
      const book = books.find(b => b.isbn === isbn);
      if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
      }
      const userReview = book.reviews.find(r => r.username === username);
      if (userReview) {
            userReview.review = review;
      } else {
            book.reviews.push({ username, review });
      }
      res.status(200).json({ message: 'Review added/updated successfully.', reviews: book.reviews });
});

// Task 9: Delete book review added by that particular user
router.delete('/books/:isbn/review', (req, res) => {
      const { username } = req.body;
      const isbn = req.params.isbn;
      const book = books.find(b => b.isbn === isbn);
      if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
      }
      book.reviews = book.reviews.filter(r => r.username !== username);
      res.status(200).json({ message: 'Review deleted successfully.', reviews: book.reviews });
});

module.exports = router;
