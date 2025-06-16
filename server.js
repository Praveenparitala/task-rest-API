const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const mongoData = process.env.DATABASE_URL;

app.listen(3000, () => {
  console.log('server started at ${3000}')
})

app.use(cors());
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));
