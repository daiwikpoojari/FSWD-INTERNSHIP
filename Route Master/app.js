// Assignment of 26th March

const express = require('express');
const app = express();
const authorRoutes = require('./routes/authors');
const bookRoutes = require('./routes/books');

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Bookstore! Go to /books or /authors to see data.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});