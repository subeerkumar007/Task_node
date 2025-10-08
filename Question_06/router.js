const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.json({ name: 'Amit', age: 25 });
});

module.exports = router;
