// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  variants: [
    {
      name: String,
      sku: String,
      stock: Number,
    },
  ],
});

module.exports = mongoose.model('Product', productSchema);
