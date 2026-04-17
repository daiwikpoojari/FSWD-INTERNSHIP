const express = require('express');
const router = express.Router();

let books = [
    { id: '101', title: 'The Fire Next Time', authorId: '1' },
    { id: '102', title: 'The White Album', authorId: '2' }
];

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
});

router.post('/', (req, res) => {
    const newBook = {
        id: Date.now().toString(),
        title: req.body.title,
        authorId: req.body.authorId
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

module.exports = router;