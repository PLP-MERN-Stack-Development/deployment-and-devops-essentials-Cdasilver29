const Category = require('../models/Category');
const { validateCategory } = require('../utils/validation');

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching categories', 
      error: error.message 
    });
  }
};

// Create category
exports.createCategory = async (req, res) => {
  try {
    // Validate input
    const { error } = validateCategory(req.body);
    if (error) {
      return res.status(400).json({ 
        success: false, 
        message: error.details[0].message 
      });
    }

    const category = await Category.create(req.body);
    res.status(201).json({ 
      success: true, 
      data: category,
      message: 'Category created successfully'
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false, 
        message: 'Category already exists' 
      });
    }
    res.status(500).json({ 
      success: false, 
      message: 'Error creating category', 
      error: error.message 
    });
  }
};
