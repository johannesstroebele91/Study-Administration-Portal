const express = require('express');
let router = express.Router();

/* GET dashboard listing. */
router.get('/', function(req, res) {
  res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;
