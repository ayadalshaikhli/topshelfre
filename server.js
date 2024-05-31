const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const booksRoute = require('./routes/booksRoute');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/books', booksRoute);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

module.exports = { app, server };
