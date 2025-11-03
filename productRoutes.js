// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // ✅ FIXED

// ✅ Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ✅ Filter by category
router.get('/category/:category', async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
});

// ✅ Get only variant details
router.get('/variants', async (req, res) => {
  const products = await Product.find({}, { name: 1, variants: 1, _id: 0 });
  res.json(products);
});

module.exports = router;
