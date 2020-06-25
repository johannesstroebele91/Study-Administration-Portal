const express = require('express');
let router = express.Router();

/* GET study-progress listing. */
router.get('/', function(req, res) {
    res.render('study-progress', { title: 'Express' });
});

module.exports = router;
