// controllers/orderController.js
const Order = require('../models/Order');

// Get all orders (admin only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('cakes');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

// Create new order
exports.createOrder = async (req, res) => {
  const { customerName, email, cakes, totalPrice } = req.body;
  try {
    const order = new Order({ customerName, email, cakes, totalPrice });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: 'Error creating order' });
  }
};
