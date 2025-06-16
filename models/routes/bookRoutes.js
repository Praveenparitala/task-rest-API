const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET all books
router.get('/getALL', (req, res) => {

  res.json(books);
});

// GET book by ID
router.get('/getOne/:id',(req, res) => {

  res.json(req.params.id);
});

// POST create book
router.post('/post',(req, res) => {
  const book = new Book(req.body);
  res.status(201).json(book);
});

// PUT update book
router.put('/put/:id',(req, res) => {
  findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

// DELETE book
router.delete('/delete/:id',(req, res) => {

  res.json({ message: 'Book deleted' });
});

module.exports = router;
