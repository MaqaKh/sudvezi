const db = require('../models/db');

exports.getBlogs = (req, res) => {
  const { category, slug } = req.query;
  let sql = 'SELECT * FROM blogs';
  let params = [];
  if (slug) {
    sql += ' WHERE slug = ?';
    params.push(slug);
  } else if (category) {
    sql += ' WHERE category = ?';
    params.push(category);
  }
  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch blogs' });
    }
    res.json(results);
  });
}; 