const express = require('express');
const router = express.Router();

// API роуты
router.post('/donate/calculate', (req, res) => {
  const amount = parseFloat(req.body.amount) || 0;
  res.json({ points: (amount / 5).toFixed(2) });
});

module.exports = router;