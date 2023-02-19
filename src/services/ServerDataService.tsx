import axios from "axios";
import React from "react";
import { Data } from "../interfaces";

const apiUrl = "https://api.carbonintensity.org.uk/generation";

const fetchEnergyGeneration = () => {
	return axios.get<Data>(apiUrl);
};

const ServerDataService = {
	fetchEnergyGeneration,
};

export default ServerDataService;
