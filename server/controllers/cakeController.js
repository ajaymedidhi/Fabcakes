// controllers/cakeController.js
const Cake = require('../models/Cake');

// Get all cakes
exports.getAllCakes = async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.json(cakes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cakes' });
  }
};

// Create new cake (admin only)
exports.createCake = async (req, res) => {
  const { name, category, flavor, description, price, imageUrl } = req.body;
  try {
    const cake = new Cake({ name, category, flavor, description, price, imageUrl });
    await cake.save();
    res.status(201).json(cake);
  } catch (err) {
    res.status(400).json({ message: 'Error creating cake' });
  }
};

// Delete cake (admin only)
exports.deleteCake = async (req, res) => {
  const { id } = req.params;
  try {
    await Cake.findByIdAndDelete(id);
    res.json({ message: 'Cake deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting cake' });
  }
};
