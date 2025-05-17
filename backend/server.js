const express = require('express');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

// MySQL connection
const db = mysql.createConnection({
  host: '193.203.168.142',
  user: 'u151991570_root',
  password: 'Sudvezi123@',
  database: 'u151991570_sudvezi',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Example web route
app.get('/', (req, res) => {
  res.render('index', { title: 'Sudvezi Home' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export db for use in controllers/models
module.exports = { app, db }; 