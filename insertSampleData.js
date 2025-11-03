// insertSampleData.js
const mongoose = require('mongoose');
const Product = require('./models/Product');  // ✅ Correct import

const MONGO_URI = 'mongodb://127.0.0.1:27017/ecommerce_catalog';

async function insertData() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // ✅ Delete all old data
    await Product.deleteMany({});

    // ✅ Insert sample products
    await Product.insertMany([
      {
        name: "T-Shirt",
        price: 499,
        category: "Clothing",
        variants: [
          { color: "Red", size: "M", stock: 20 },
          { color: "Blue", size: "L", stock: 15 }
        ]
      },
      {
        name: "Shoes",
        price: 1499,
        category: "Footwear",
        variants: [
          { color: "Black", size: "9", stock: 10 },
          { color: "White", size: "10", stock: 8 }
        ]
      }
    ]);

    console.log("✅ Sample data inserted successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

insertData();
