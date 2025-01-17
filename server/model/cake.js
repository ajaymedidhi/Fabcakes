// models/Cake.js
const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  flavor: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Cake', CakeSchema);
