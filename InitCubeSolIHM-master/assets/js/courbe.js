var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            label: 'Temperature systeme',
            data: [],
            borderWidth: 2,
            borderColor: ['red'],
        }, {
            label: 'Temperature processeur',
            data: [],
            borderWidth: 2,
            borderColor: ['green'],
        }, {
            label: 'Temperature batterie',
            data: [],
            borderWidth: 2,
            borderColor: ['yellow'],
        }, {
            label: 'Temperature caméra',
            data: [],
            borderWidth: 2,
            borderColor: ['aqua'],
        }, {
            label: 'Temperature Test',
            data: [],
            borderWidth: 2,
            borderColor: ['white'],
        }]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        maintainAspectRatio: false
    }
});
