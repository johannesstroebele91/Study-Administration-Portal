const express = require('express');

const serverless = require('serverless-http');

// express app (instance of express)
const app = express();

// router
const router = express.Router();

// root for the app with passed in request and response
router.get("/", (req, res) => {
    res.json({
        'hello': 'hi!'
    });
});

/* extra endpoint test
router.get('/test', (req, res) => {
    res.json({
        'hello': 'test!'
    });
});
*/

// bind router into the app
// tell router where its bound to (Netlify puts all functions into /.netlify/functions)
// the router knows that it lives at this route /.netlify/functions/api
app.use('/.netlify/functions/api', router);

// export handler function for enabling executable to run (lambda file)
module.exports = app;
module.exports.handler = serverless(app);
