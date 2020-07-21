// Navigation on multiple pages
$(function () {
    $("#nav-placeholder").load("nav.html");
});

// Login
function submitForm() {

    let email = "admin@gmail.com";
    let password = "password";

    if (document.getElementById("password").value === password && document.getElementById("email").value === email) {
        location.href = '/dashboard';
    } else if (document.getElementById("password").value === password) {
        console.log('Password is not "password"');
    } else if (document.getElementById("email").value === email) {
        console.log('Email is not "admin@gmail.com"');
    } else {
        console.log('Other issue');
    }
}
