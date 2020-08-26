import React from "react";
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";

const styles = buildStyles({
	strokeLinecap: "round",
	textColor: "#fff",
	pathColor: "#af1b3f",
	trailColor: "#224865",
	backgroundColor: "#af1b3f",
});

const CircularProgressBar = ({ text, value, className }) => (
	<CircularProgressbarWithChildren
		value={value}
		strokeWidth={5}
		styles={styles}
	>
		<p className={className}>{text}</p>
	</CircularProgressbarWithChildren>
);

export default CircularProgressBar;
