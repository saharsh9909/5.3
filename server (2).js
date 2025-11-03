// server.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json()); // To parse JSON data

const MONGO_URI = 'mongodb://127.0.0.1:27017/ecommerce_catalog';

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Use routes
app.use('/api/products', productRoutes);

// ✅ Default route
app.get('/', (req, res) => {
  res.send('E-commerce Catalog API is running ✅');
});

// ✅ Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
