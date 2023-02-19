import React, { useEffect, useState } from "react";
import BigNumbers from "./components/BigNumbers/BigNumbers";
import BarChart from "./components/BarChart/BarChart";
import { GenerationMix } from "./interfaces";
import ServerDataService from "./services/ServerDataService";
import DualWheelChart from "./components/DualWheelChart/DualWheelChart";
import "./app.css";

const App = () => {
	const [data, setData] = useState<GenerationMix[]>([]);
	const [lastDate, setLastDate] = useState<string>("");

	useEffect(() => {
		ServerDataService.fetchEnergyGeneration().then((response) => {
			setData(response.data.data.generationmix);
			setLastDate(response.data.data.from);
		});
	}, []);

	return (
		<div className="App">
			<h1 className="header">UK Energy Mix</h1>
			<p className="pre-header">last update : {lastDate}</p>
			<BigNumbers data={data} />
			<BarChart data={data} />
			<DualWheelChart data={data} />
		</div>
	);
};

export { App };
