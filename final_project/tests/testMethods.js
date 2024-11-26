const { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle } = require('../methods');


// Task 10: Using callback
console.log('Task 10:');
getAllBooks((error, data) => {
    if (error) {
        console.error('Error fetching all books:', error);
    } else {
        console.log('All Books:', data);
    }
});

// Task 11: Using Promises
console.log('Task 11:');
getBookByISBN('12345')
    .then(response => console.log('Book Details:', response.data))
    .catch(error => console.error('Error fetching book by ISBN:', error));

// Task 12: Search by Author
console.log('Task 12:');
getBooksByAuthor('Author One')
    .then(response => console.log('Books by Author:', response.data))
    .catch(error => console.error('Error fetching books by author:', error));

// Task 13: Search by Title
console.log('Task 13:');
getBooksByTitle('Book One')
    .then(response => console.log('Books by Title:', response.data))
    .catch(error => console.error('Error fetching books by title:', error));
