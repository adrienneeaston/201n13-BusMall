const CHART = document.getElementBtId("barchart");
CHART.defaults.scale.ticks.beginAtZero = true;

let barChart = new CHART(CHART, {
    type:'bar',
    data: ['Banana', 'breakfast', 'chthuhu'], //etc
    datasets: [
        {
            label: 'Number of Clicks',
            backgroundColor: '#00FF00',
            borderColor: '#00FF00',
            borderWidth: 2,
            data: [5, 2, 8]
        }
    ]
}