import React from "react";
import "./Loading.css";

const Loading = ({ radius = 32, border = 2, color = "var(--primary)" }) => {
	return (
		<div className="loading-container">
			<div
				style={{
					"--width": `${radius}px`,
					"--height": `${radius}px`,
					"--border": `${border}px`,
					"--color": `${color}`,
				}}
				className="lds-ring"
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
