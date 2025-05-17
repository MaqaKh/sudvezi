const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

// Example: GET /api/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

// Add more API endpoints here

// GET /api/users
router.get('/users', sampleController.getUsers);

module.exports = router; 