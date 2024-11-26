const axios = require('axios');

// Mock API base URL
const BASE_URL = 'http://localhost:3000';

// Task 10: Get all books – Using async callback function
function getAllBooks(callback) {
    axios.get(`${BASE_URL}/books`)
        .then(response => callback(null, response.data))
        .catch(error => callback(error));
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
    return axios.get(`${BASE_URL}/books/${isbn}`);
}

// Task 12: Search by Author
function getBooksByAuthor(author) {
    return axios.get(`${BASE_URL}/books/author/${author}`);
}

// Task 13: Search by Title
function getBooksByTitle(title) {
    return axios.get(`${BASE_URL}/books/title/${title}`);
}

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };
