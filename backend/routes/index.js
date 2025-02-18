const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('frontend/src/Homepage.jsx', { title: 'Express', user: req.user });
});

module.exports = router;
