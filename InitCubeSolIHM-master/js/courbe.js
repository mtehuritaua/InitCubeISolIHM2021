//var Chart = require('chart.js');
//$(document).ready(function() {
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            label: 'Niveau de charge de la batterie',
            data: [],
            borderWidth: 2,
            borderColor: ['red'],
        }, {
            label: 'Tension de sortie',
            data: [],
            borderWidth: 2,
            borderColor: ['green'],
        }, {
            label: 'Courant de sortie',
            data: [],
            borderWidth: 2,
            borderColor: ['yellow'],
        }, {
            label: 'RAM utilisée en %',
            data: [],
            borderWidth: 2,
            borderColor: ['aqua'],
        }, {
            label: 'Stockage libre en %',
            data: [30,23,56,45,34,23,67,76,12,12],//data: [],
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
//});
