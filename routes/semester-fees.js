const express = require('express');
let router = express.Router();

/* GET semester-fees listing. */
router.get('/', function(req, res) {
    res.render('semester-fees', { title: 'semester-fees' });
});

module.exports = router;
