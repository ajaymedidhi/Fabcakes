// routes/cakeRoutes.js
const express = require('express');
const { getAllCakes, createCake, deleteCake } = require('../controllers/cakeController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllCakes);
router.post('/', authMiddleware, adminMiddleware, createCake);
router.delete('/:id', authMiddleware, adminMiddleware, deleteCake);

module.exports = router;
