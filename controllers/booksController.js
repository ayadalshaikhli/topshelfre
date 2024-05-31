const books = require('../data/booksData');


// Get all books
const getAllBooks = (req, res) => {
    console.log("Fetching all books", books);
    res.json(books);
};

// Get a book by ID
const getBookById = (req, res) => {
    console.log("fetching by ID", req.params.id);
    const { id } = req.params;
    const book = books.find(book => book.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
};

// Create a new book
const createBook = (req, res) => {
    console.log("creating a new book", req.body);
    const newBook = req.body;
    const existingBook = books.find(book => book.id === newBook.id);

    if (existingBook) {
        res.status(400).send({ message: 'Book with this ID already exists' });
    } else {
        books.push(newBook);
        res.status(201).json(newBook);
    }
};

// Update an existing book by ID
const updateBook = (req, res) => {
    console.log("updating by ID", req.params.id);
    console.log("body", req.body);
    console.log("books", books);
    const { id } = req.params;
    const updatedBook = req.body;
    const existingBook = books.find(book => book.id === updatedBook.id && book.id !== id);

    if (existingBook) {
        res.status(400).send({ message: 'Another book with this ID already exists' });
        return;
    }

    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        books[bookIndex] = updatedBook;
        res.json(updatedBook);
    } else {
        console.log("Book not found for update");
        res.status(404).send({ message: 'Book not found' });
    }
};

// Delete a book by ID
const deleteBook = (req, res) => {
    console.log("deleting by ID", req.params.id);
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {

        books.splice(bookIndex, 1);
        res.status(200).send({ message: 'Book deleted successfully' });
    } else {
        console.log("book not found");
        res.status(404).send({ message: 'Book not found' });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
