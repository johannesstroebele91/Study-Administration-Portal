const express = require('express');
let router = express.Router();

/* GET faq listing. */
router.get('/', function(req, res) {
    res.render('faq', { title: 'FAQ' });
});

module.exports = router;
