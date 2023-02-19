import React from "react";
import { GenerationMix } from "../../interfaces";
import "./BigNumbers.css";

export interface Props {
	data: Array<GenerationMix>;
}

const BigNumbers = (props: Props) => {
	return (
		<div className="big-number-section">
			<div className="container">
				<h3 className="title">Energy generation summary</h3>
				<div className="d-flex flex-wrap justify-content-center">
					{props.data.map((element: GenerationMix, index: number) => {
						return (
							<div
								className="big-number d-flex flex-column"
								key={index}
							>
								<h1>{element.perc}</h1>
								<h5>{element.fuel}</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BigNumbers;
