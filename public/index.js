// Navigation on multiple pages
$(function(){
    $("#nav-placeholder").load("nav.html");
});

function myFunction() {
    let email = "admin@gmail.com";
    let password = "password";

    if (document.getElementById("password").value === password && document.getElementById("email").value === email){
        console.log('Success');
        location.href='/dashboard';
    } else {
        console.log('Failure');
        location.href='/';
    }
}
