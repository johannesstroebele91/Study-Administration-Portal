// Chart.js Global Styling Options
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontsize = 18;
Chart.defaults.global.defaultFontColor = '#777';

// Bar Chart Study Progress
let barChartStudyProgress = document.getElementById('barChartStudyProgress').getContext('2d');
let BarChartStudyProgress = new Chart(barChartStudyProgress, {
    type: 'horizontalBar',
    data: {
        labels: ["Mandatory Courses", "Internship", "Thesis", "Specialisations", "Projects"],
        datasets: [{
            label: "Completed ECTS",
            backgroundColor: ["#8459b6", "#b65795", "#b65266", "#2ecc71", "#3498db"],
            hoverBackgroundColor: "rgb(19,163,78)",
            data: [96, 30, 0, 20, 25],
        }, {
            label: "Remaining ECTS",
            backgroundColor: "rgba(206,206,206,0.5)",
            hoverBackgroundColor: "rgb(170,170,170)",
            data: [0,0,12,17, 10]
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
