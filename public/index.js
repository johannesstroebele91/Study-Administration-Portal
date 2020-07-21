// Navigation on multiple pages
$(function () {
    $("#nav-placeholder").load("nav.html");
});

$(function () {
    $("#footer-placeholder").load("footer.html");
});

// Login
function submitForm() {

    let email = "admin@gmail.com";
    let password = "password";

    console.log("here");

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

function linkToExams() {
    window.location.href = '/exams';
    return false;
}



