export interface GenerationMix {
	fuel: string;
	perc: number;
}

export interface Energy {
	from: string;
	to: string;
	generationmix: Array<GenerationMix>;
}

export interface Data {
	data: Energy;
}
