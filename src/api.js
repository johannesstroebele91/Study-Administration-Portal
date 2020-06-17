const express = require('express');

const serverless = require('serverless-http');

// express app (instance of express)
const app = express();

// router
const router = express.Router();

// root for the app with passed in request and response
router.get('/', (req, res) => {
    res.json({
        'hello': 'hi!'
    });
});

// extra endpoint
router.get('/test', (req, res) => {
    res.json({
        'hello': 'test!'
    });
});

// handler function for enabling executable to run (lambda file)
module.exports.handler = serverless(app);

// router is bound into the app
// tell Netlify which files should be served (Netlify puts all functions into /.netlify/functions)
app.use('/.netlify/functions/api', router);
