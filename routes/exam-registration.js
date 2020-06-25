const express = require('express');
let router = express.Router();

/* GET exam registration listing. */
router.get('/', function(req, res) {
    res.render('exam-registration', { title: 'Exam registration' });
});

module.exports = router;
