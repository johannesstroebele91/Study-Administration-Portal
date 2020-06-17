const express = require('express');

const serverless = require('serverless-http');

// express app (instance of express)
const app = express();

// router
const router = express.Router();

// root for the app with passed in request and response
router.get("/", (req, res) => {
    res.sendFile('index.html', { root: '/Users/apple/Desktop/1_Studium/1_Veranstaltungen/5. Semester/Mobile Medien/ExamRegistration/src/' });
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
module.exports.handler = serverless(app);
