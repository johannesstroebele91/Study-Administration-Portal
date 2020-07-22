$(document).ready(function(){

    // Hiding sections for enroll in tab based on user preferences
    $("#hide-section-mandatory-courses").click(function(){
        $(".section-mandatory-courses").hide();
    });

    $("#hide-section-specializations").click(function(){
        $(".section-specializations").hide();
    });

    $("#hide-section-projects").click(function(){
        $(".section-projects").hide();
    });

    // Button for showing them again
    $("#show-sections").click(function(){
        $(".section-mandatory-courses, .section-specializations, .section-projects").show();
    });
});


// TODO implement automatic table generation from mock data: https://stackoverflow.com/questions/171027/add-table-row-in-jquery
// and https://stackoverflow.com/questions/18333427/how-to-insert-a-row-in-an-html-table-body-in-javascript
/*
let courses = [
    {
        registered: true,
        id: 53423,
        name: "App Design",
        lastName: "20.07.2020",
        degree: "ID",
    },
    {
        registered: true,
        id: 53423,
        name: "App Design",
        lastName: "20.07.2020",
        degree: "ID",
    },
    {
        registered: true,
        id: 53423,
        name: "App Design",
        lastName: "20.07.2020",
        degree: "ID",
    },
    {
        registered: true,
        id: 53423,
        name: "App Design",
        lastName: "20.07.2020",
        degree: "ID",
    },
    {
        registered: true,
        id: 53423,
        name: "App Design",
        lastName: "20.07.2020",
        degree: "ID",
    },
];

$('#table-mock-data > tbody:last-child').append('<tr><th>Deregister</th></tr><tr><th>Deregister</th></tr>');
*/
