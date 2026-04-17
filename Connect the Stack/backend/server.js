// Assignment of 11th April

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: "Backend is connected! ✅" });
});

app.listen(5000, () => console.log('Server running on port 5000'));