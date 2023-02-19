import React, { useState, useEffect } from "react";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	RadialLinearScale,
} from "chart.js";
import "./DualWheelChart.css";
import { GenerationMix } from "../../interfaces";
import { Doughnut } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";

export interface Props {
	data: Array<GenerationMix>;
}

const DualWheelChart = (props: Props) => {
	ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

	const [backgroundColors, setBackgroundColors] = useState<Array<string>>([]);
	const [borderColors, setBorderColors] = useState<Array<string>>([]);

	const labels = props.data.map((element) => element.fuel);

	const datasets = props.data.map((element) => element.perc);

	const data = {
		labels,
		datasets: [
			{
				data: datasets,
				backgroundColor: backgroundColors,
				borderColor: borderColors,
			},
		],
	};

	const options_doughnut = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom" as const,
			},
			title: {
				display: true,
				text: "Energy Repartition Chart",
			},
		},
	};

	const options_polar = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom" as const,
			},
			title: {
				display: true,
				text: "Energy Gap Chart",
			},
		},
	};

	useEffect(() => {
		generateRandomColors();
	}, [props]);

	const generateRandomColors = () => {
		let backgroundColors = [];
		let borderColors = [];

		props.data.forEach(() => {
			// We want red to be our main theme
			const red = Math.min(Math.floor(Math.random() * 256) + 150, 255);
			const green = Math.floor(Math.random() * 150);
			const blue = Math.floor(Math.random() * 150);
			const backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.4)`;
			backgroundColors.push(backgroundColor);
			const borderColor = `rgba(${red}, ${green}, ${blue}, 1)`;
			borderColors.push(borderColor);
		});

		setBackgroundColors(backgroundColors);
		setBorderColors(borderColors);
	};

	return (
		<div className="dual-wheel-section">
			<div className="container">
				<div className="d-flex flex-row">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							height: "400px",
							position: "relative",
						}}
					>
						<Doughnut options={options_doughnut} data={data} />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							height: "400px",
							position: "relative",
						}}
					>
						<PolarArea options={options_polar} data={data} />;
					</div>
				</div>
			</div>
		</div>
	);
};

export default DualWheelChart;
