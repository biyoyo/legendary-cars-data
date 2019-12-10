petrol_col = 'rgba(241, 52, 43, 1)'
gas_col = 'rgba(27, 108, 227, 1)'
diezel_col = 'rgba(161, 183, 21, 1)'
electro_col = 'rgba(28, 201, 20, 1)'
other_col =	'rgba(43, 48, 50, 1)'

current_year = cars_count_data[cars_count_data.length - 1]
other = current_year[1]

for (i = 2; i < current_year.length; i++)
{
	other -= current_year[i]
}

age_data = []
for (i = 0; i < cars_age_data[3].length; i++)
{
	age_data[i] = cars_age_data[3][i]
}
age_data.shift()

age_labels = ['0-5', '6-10', '11-15', '15-20', '20+']

fuel_labels = ['Petrol', 'Gas', 'Diesel', 'Electricity', 'Other']
fuel_data = [current_year[2], current_year[3], current_year[4], current_year[5], other]

	var ctx = document.getElementById('myPieChart1').getContext('2d');

	piechart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: [],
			datasets: [{
				label: '# of cars',
				data:[],
				backgroundColor: [
					petrol_col,
					gas_col,
					diezel_col,
					electro_col,
					other_col,
				],
				borderWidth: 1
			}]
		},
		options: {
			title: {
				display: true,
				text: ""
			},
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
function pie_chart(m_labels, m_data, m_title)
{
	piechart.data.labels = m_labels
	piechart.data.datasets[0].data = m_data
	piechart.options.title.text = m_title
	piechart.update()
}

petrol = [], gas = [], diesel = [], electric = []
for (i = 0; i < cars_count_data.length; i++)
{
	petrol[i] = cars_count_data[i][2]
	gas[i] = cars_count_data[i][3]
	diesel[i] = cars_count_data[i][4]
	electric[i] = cars_count_data[i][5]
}

function line_chart()
{
	var ctx = document.getElementById('myLineChart').getContext('2d');

	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['2016', '2017', '2018', '2019'],
			datasets: [{
				label: 'Petrol',
				data: petrol,
				borderColor: 
				petrol_col,
			}, {
				label: 'Gas',
				data: gas,
				borderColor: 
				gas_col,
			}, {
				label: 'Diesel',
				data: diesel,
				borderColor: 
				diezel_col,
			}, {
				label: 'Electricity',
				data: electric,
				borderColor: 
				electro_col,
			}]
		},
		options: {
			responsive: false,
			tension: 0,
			showLine: false,
			fill: false,
			title: {
				display: true,
				text: "Tendencies through the years"
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: false
					}
				}]
			}
		}
	});
}
