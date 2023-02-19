import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import { GenerationMix } from "../../interfaces";

export interface Props {
	data: Array<GenerationMix>;
}

const Chart = (props: Props) => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const labels = props.data.map((element) => element.fuel);

	const datasets = props.data.map((element) => element.perc);

	const data = {
		labels,
		datasets: [
			{
				label: "Quantity",
				data: datasets,
				backgroundColor: " rgba(200, 0, 0, 0.2)",
				borderColor: " rgba(200, 0, 0, 0.8)",
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom" as const,
			},
			title: {
				display: true,
				text: "Energy Data Chart",
			},
		},
	};

	return (
		<div className="chart-section">
			<div className="container">
				<Bar options={options} data={data} />
			</div>
		</div>
	);
};

export default Chart;
