const express = require('express');
let router = express.Router();

/* GET exams listing. */
router.get('/', function(req, res) {
    res.render('exams', { title: 'exams' });
});

module.exports = router;
