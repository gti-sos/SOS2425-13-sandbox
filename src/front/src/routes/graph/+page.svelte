<script>
	import { onMount } from 'svelte';

	import { dev } from '$app/environment'; 

	let DEVEL_HOST = 'http://localhost:16078';

	let API = '/api/v1/data'; 
	if (dev) {
		API = DEVEL_HOST + API; 
	}

      /**
	 * @type {never[]}
	 */
	let myData = [];
	let result = '';
	let resultStatus = '';

	async function getData() {
		 resultStatus = (result = '');

		try {
			const res = await fetch(API, { method: 'GET' });
			const data = await res.json();
			result = JSON.stringify(data, null, 2);

			myData = data; // Assigning the fetched data to myData
			console.log(`Response received: \n${JSON.stringify(myData, null, 2)}`);
		} catch (error) {
			console.log(`ERROR getting data from ${API}: ${error}`);
		}
	}

	onMount(async () => {
		
        await getData(); // Fetch data when the component mounts
        //@ts-ignore
		Highcharts.chart('container', {
			title: {
				text: 'My data',
				align: 'center'
			},

			yAxis: {
				title: {
					text: 'Value'
				}
			},

			xAxis: {
				accessibility: {
					rangeDescription: 'Data point'
				}
			},

			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 1
				}
			},

			series: [
				{
					name: 'Data',
					data: myData,
				}
			],

			responsive: {
				rules: [
					{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'center',
								verticalAlign: 'bottom'
							}
						}
					}
				]
			}
		});
	});
</script>

<svelte:head>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/series-label.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>

<figure class="highcharts-figure">
	<div id="container"></div>
</figure>

<style>
	.highcharts-figure,
	.highcharts-data-table table {
		min-width: 360px;
		max-width: 800px;
		margin: 1em auto;
	}

	.highcharts-data-table table {
		font-family: Verdana, sans-serif;
		border-collapse: collapse;
		border: 1px solid #ebebeb;
		margin: 10px auto;
		text-align: center;
		width: 100%;
		max-width: 500px;
	}

	.highcharts-data-table caption {
		padding: 1em 0;
		font-size: 1.2em;
		color: #555;
	}

	.highcharts-data-table th {
		font-weight: 600;
		padding: 0.5em;
	}

	.highcharts-data-table td,
	.highcharts-data-table th,
	.highcharts-data-table caption {
		padding: 0.5em;
	}

	.highcharts-data-table thead tr,
	.highcharts-data-table tbody tr:nth-child(even) {
		background: #f8f8f8;
	}

	.highcharts-data-table tr:hover {
		background: #f1f7ff;
	}

	.highcharts-description {
		margin: 0.3rem 10px;
	}
</style>
