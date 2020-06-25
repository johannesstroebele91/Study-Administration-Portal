const express = require('express');
let router = express.Router();

/* GET certificates-and-forms listing. */
router.get('/', function(req, res) {
    res.render('certificates-and-forms', { title: 'Certificates and forms' });
});

module.exports = router;
