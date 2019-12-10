var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['9', '10', '11'],
		datasets: [{
			label: '# of cars',
			data: [1359569, 1362307, 1362749],
			borderWidth: 1
		}]
	},
	options: {
		responsive: false,
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: false
				}
			}]
		}
	}
});
