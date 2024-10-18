// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  cakes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cake' }], // Array of cakes ordered
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // 'pending', 'completed', 'cancelled'
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
