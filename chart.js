'use strict'

const CHART = document.getElementById("barchart");
CHART.defaults.scale.ticks.beginAtZero = true;

var barChart = new CHART(CHART, {
    type:'bar',
    data: ['Banana', 'breakfast', 'chthuhu'], //etc
    datasets: [
        {
            label: 'Number of Clicks',
            backgroundColor: '#00FF00',
            borderColor: '#00FF00',
            borderWidth: 2,
            data: [5, 2, 8] // placeholder numbers
        }
    ]
});

// need to create arrays for product names and product clicks to use in chart