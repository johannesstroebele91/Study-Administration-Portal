// Chart.js Global Styling Options
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontsize = 18;
Chart.defaults.global.defaultFontColor = '#777';

// Bar Chart Study Progress
let barChartStudyProgress = document.getElementById('barChartStudyProgress').getContext('2d');
let BarChartStudyProgress = new Chart(barChartStudyProgress, {
    type: 'horizontalBar',
    data: {
        labels: ["Mandatory Courses", "Internship", "Thesis", "Elective Mandatory Courses"],
        datasets: [{
            label: "Completed ECTS",
            backgroundColor: "rgba(46,204,113,0.5)",
            hoverBackgroundColor: "rgb(19,163,78)",
            data: [96, 30, 0, 43],
        }, {
            label: "Remaining ECTS",
            backgroundColor: "rgba(206,206,206,0.5)",
            hoverBackgroundColor: "rgb(170,170,170)",
            data: [0,0,12,29]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
