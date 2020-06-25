const express = require('express');
let router = express.Router();

/* GET profile listing. */
router.get('/', function(req, res) {
    res.render('profile', { title: 'Express' });
});

module.exports = router;
