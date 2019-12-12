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
for (i = 0; i < cars_age_data[3].length - 1; i++)
{
	age_data[i] = cars_age_data[3][i + 1]
}
age_labels = ['0-5', '6-10', '11-15', '15-20', '20+']
age_colors = [electro_col, gas_col, diezel_col, petrol_col, other_col]

fuel_labels = ['Petrol', 'Gas', 'Diesel', 'Electricity', 'Other']
fuel_colors = [petrol_col, gas_col, diezel_col, electro_col, other_col]
fuel_data = [current_year[2], current_year[3], current_year[4], current_year[5], other]

years = ['2016', '2017', '2018', '2019']
petrol_by_year_labels = ['Petrol', 'Gas', 'Diesel', 'Electricity']
petrol = [], gas = [], diesel = [], electric = []
for (i = 0; i < cars_count_data.length; i++)
{
	petrol[i] = cars_count_data[i][2]
	gas[i] = cars_count_data[i][3]
	diesel[i] = cars_count_data[i][4]
	electric[i] = cars_count_data[i][5]
}

eco_labels = ['Euro6', 'Euro5', 'Euro4', 'Euro3', 'Euro2', 'Euro1']
eco_colors = ['#1976d2', '#0d47a1', '#afb42b', '#827717', '#616161', '#212121']
eco_data = [[], [], [], [], [], [], []]
for (i = 0; i < cars_eco_cat_data.length; i++)
{
	eco_data[0][i] = cars_eco_cat_data[i][1]
	eco_data[1][i] = cars_eco_cat_data[i][2]
	eco_data[2][i] = cars_eco_cat_data[i][3]
	eco_data[3][i] = cars_eco_cat_data[i][4]
	eco_data[4][i] = cars_eco_cat_data[i][5]
	eco_data[5][i] = cars_eco_cat_data[i][6]
	eco_data[6][i] = cars_eco_cat_data[i][7]
}

ctx = document.getElementById('myChart').getContext('2d');
myChart = new Chart(ctx, {})

function pie_chart(m_labels, m_data, m_title, m_colors)
{
	myChart.destroy()
	myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: [],
			datasets: [{
				label: '# of cars',
				data:[],
				backgroundColor: [],
				borderWidth: 1
			}]
		},
		options: {
			title: {
				display: true,
				text: ""
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

	myChart.data.labels = m_labels
	myChart.data.datasets = [{
		label: '# of cars',
		data: m_data,
		backgroundColor: m_colors
	}]
	myChart.options.title.text = m_title
	myChart.update()
}

function line_chart()
{
	myChart.destroy()
	myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [],
			datasets: []
		},
		options: {
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

function line_chart_fuel()
{
	line_chart()
	myChart.data.labels = years
	myChart.data.datasets = [{
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
	myChart.update()
}

function line_chart_eco()
{
	line_chart()
	myChart.data.labels = years
	myChart.data.datasets = [{
		label: eco_labels[0],
		data: eco_data[0],
		borderColor: 
		eco_colors[0],
	}, {
		label: eco_labels[1],
		data: eco_data[1],
		borderColor: 
		eco_colors[1],
	}, {
		label: eco_labels[2],
		data: eco_data[2],
		borderColor: 
		eco_colors[2],
	}, {
		label: eco_labels[3],
		data: eco_data[3],
		borderColor: 
		eco_colors[3],
	}, {
		label: eco_labels[4],
		data: eco_data[4],
		borderColor: 
		eco_colors[4],
	}, {
		label: eco_labels[5],
		data: eco_data[5],
		borderColor: 
		eco_colors[5],
	}]
	myChart.update()
}

function pie_chart_fuel()
{
	pie_chart(fuel_labels, fuel_data, 'Cars by fuel type', fuel_colors)
}

function pie_chart_age()
{
	pie_chart(age_labels, age_data, 'Cars by age', age_colors)
}

pie_chart_fuel()
