# HdM Study Administration Portal

This project was developed for the course "334050 Mobile Medien" of [Prof. Dr. Jörg Westbomke](mailto:westbomke@hdm-stuttgart.de?subject=[GitHub]HdM Study Adminstration Portal) at the Stuttgart Media University. The web application was developed by [Johannes](https://github.com/johannesstroebele91).

## Project Goal
The goal is to develop an exam registration page that enables students to easily register and view exams not only on desktop, but tablet and mobile devices. Therefore, a web application will be developed focusing the following factors:

First, a responsive layout will be coded for the exam registration page using Bootstrap. Second, the structure and features of this page need to be improved. Third, reusable components will be created for making the application easy to adapt. Fourth, complex student data will be visualized using responsive charts. Lastly, the application needs to be made accessible via the Internet.

If there is time left, the other pages of the study administration portal will be created (e. g. implementing a login page). Also, the information architecture will be reworked, and a navigation implemented. Finally, the visual aesthetical design of the application will be improved (e. g. colors, whitespace, typography).

## Repository Structure
_The files in this repository have the following purpose:_

- bin: serves as a location where various startup scripts are defined for Express (the www file inside is an example to start the express app as a web server)
- dist: the compiled code/libraries meant for production
- node_modules: libraries and dependencies for packages, used by Node package manager
- public: files to build and develop the project (original source files), before being compiled into fewer files to dist/ directory
  - assets (a logo, icons, and avatar pictures) 
  - components: HTML elements that were outsourced to either be reusable or prevent code cluttering 
  - javascripts: JavaScript files for the dashboard (Chart.js bar chart code) and exams (hide and show certain elements)
  - pages: includes all of the application HTML pages
  - stylesheets: styling of the application
  - index.html: login page
  - index.js: includes all of the JavaScript code used across the application (JavaScript code for inserting reusable components, login functionality, working links due to different routing with Express)
- app.js: main configuration file for the Express application to handle actions such as the HTTP server, routing, and serving of static files
- package.json: provides metadata of the project as well as handles the dependency management with Node package manager
- .gitignore: text file that tells Git which files or folders to ignore in a project

## Software Architecture
_This is the current software architecture:
![image](https://user-images.githubusercontent.com/33202527/89467374-bcfc0580-d775-11ea-8760-4818ab4285f3.png)

## Lessons Learned
_Are more detailed list can be found [on the lessons learned wiki page](https://github.com/Fleet-Analytics-Dashboard/Application/wiki/Lessons-Learned)_

- Boostrap is great for development responsive apps due to many options for layouting (d-flex), aesthetic styling, useful components  (e.g. Modals, Tabs)
- making the web application accessible via the Internet was more challenging than expected
   - static routing needed to be coded
   - serverless HTTP took time to understand and implement correctly 
- tried vertical row display of tables for mobile, but switch to responsive tables:
   - reason: amount of courses (scrolling would be very long for vertical display) 
   - reason: users are mostly interested in the first columns (name, id, ECTS)
   - responsive table improvements: always visible scrollbar and larger checkboxes

## License

MIT License - Copyright 2020 ©
