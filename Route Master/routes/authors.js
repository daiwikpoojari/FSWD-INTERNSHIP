const express = require('express');
const router = express.Router();

let authors = [
    { id: '1', name: 'James Baldwin' },
    { id: '2', name: 'Joan Didion' }
];

router.get('/', (req, res) => {
    res.json(authors);
});

router.get('/:id', (req, res) => {
    const author = authors.find(a => a.id === req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
});

router.post('/', (req, res) => {
    const newAuthor = {
        id: Date.now().toString(),
        name: req.body.name
    };
    authors.push(newAuthor);
    res.status(201).json(newAuthor);
});

module.exports = router;