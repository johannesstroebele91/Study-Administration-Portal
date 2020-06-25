const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const serverless = require('serverless-http');
const app = express();

// Defining routes
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const studyProgressRouter = require('./routes/study-progress');
const examsRouter = require('./routes/exams');
const examRegistrationRouter = require('./routes/exam-registration');
const semesterFeesRouter = require('./routes/semester-fees');
const certificatesAndFormsRouter = require('./routes/certificates-and-forms');
const profileRouter = require('./routes/profile');
const faqRouter = require('./routes/faq');

const index = express();
index.set('views', path.join(__dirname, 'public/pages'));
index.engine('html', require('ejs').renderFile);
index.set('view engine', 'html');

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));
index.use(cookieParser());
index.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
}));
index.use(express.static(path.join(__dirname, 'public')));

// Routing
index.use('/', indexRouter);
index.use('/dashboard', dashboardRouter);
index.use('/study-progress', studyProgressRouter);
index.use('/exams', examsRouter);
index.use('/exams/exam-registration', examRegistrationRouter);
index.use('/semester-fees', semesterFeesRouter);
index.use('/certificates-and-forms', certificatesAndFormsRouter);
index.use('/profile', profileRouter);
index.use('/faq', faqRouter);

module.exports.handler = serverless(app);

index.listen(8080, () => console.log('Example app listening on port 8080!'));
