// Chart.js Global Styling Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontsize = 18;
Chart.defaults.global.defaultFontColor = '#777';

// Bar Chart Study Progress
let barChartStudyProgress = document.getElementById('barChartStudyProgress').getContext('2d');
let BarChartStudyProgress = new Chart(barChartStudyProgress, {
    type: 'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        datasets: [{
            label: '% completed',
            data: [83],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2
        },
            {
                label: '% remaining',
                data: [17],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            position: 'bottom',
        },
        responsive: true,
        maintainAspectRatio: true
    }
});
