const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');
const categoriesController = require('../controllers/categoriesController');
const blogsController = require('../controllers/blogsController');

// Example: GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// Add more API endpoints here

// GET /api/users
router.get('/users', sampleController.getUsers);

// GET /api/categories
router.get('/categories', categoriesController.getCategories);

// GET /api/blogs
router.get('/blogs', blogsController.getBlogs);

module.exports = router; 