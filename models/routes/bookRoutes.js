const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.get('/getAll', (req, res) => {
  res.json(books);
});

router.get('/getOne/:id',(req, res) => {
  res.json(book);
});

router.post('/post', (req, res) => {
  const book = new Book(req.body);
  res.status(201).json(book);
});

router.put('/put/:id',(req, res) => {
  const book = Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

router.delete('/delete/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
