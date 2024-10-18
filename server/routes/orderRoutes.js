// routes/orderRoutes.js
const express = require('express');
const { getAllOrders, createOrder } = require('../controllers/orderController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, getAllOrders);
router.post('/', createOrder);

module.exports = router;
