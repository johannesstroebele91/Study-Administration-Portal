// Navigation on multiple pages
$(function () {
    $("#nav-placeholder").load("nav.html");
});

// Footer on multiple pages
$(function () {
    $("#footer-placeholder").load("footer.html");
});

// Outsource deregister courses modal
$(function () {
    $("#modal-deregister-courses-placeholder").load("modal-deregister-courses.html");
});

// Outsource enroll courses modal
$(function () {
    $("#modal-enroll-courses-placeholder").load("modal-enroll-courses.html");
});

// TODO fix nav active
$(function(){
    let current = location.pathname;
    $('#navbarSupportedContent li a').each(function(){
        let $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
        console.log('here');
        console.log($this.attr('href'));
        console.log($this.attr('href').indexOf(current));
        console.log($(this));
    })
})


// Link to Login Page
function login() {

    let email = "admin@gmail.com";
    let password = "password";

    if (document.getElementById("password").value === password && document.getElementById("email").value === email) {
        window.location.href = '/dashboard';
        return false;
    } else if (document.getElementById("password").value === password) {
        console.log('Password is not "password"');
    } else if (document.getElementById("email").value === email) {
        console.log('Email is not "admin@gmail.com"');
    } else {
        console.log('Other issue');
    }
}

// Link to Exams Page
function linkToExams() {
    window.location.href = '/exams';
    return false;
}

// Link to Exam Registration Page
function linkToExamRegistration() {
    window.location.href = '/exam-registration';
    return false;
}

// Deregister Courses
function deregisterCourses() {
    // TODO implement logic
    linkToExams();
}

// Enroll Courses
function enrollCourses() {
    // TODO implement logic
    linkToExams();
}




