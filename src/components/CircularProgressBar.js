import React from "react";
import PropTypes from "prop-types";
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";

const styles = buildStyles({
	strokeLinecap: "round",
	textColor: "#fff",
	pathColor: "#af1b3f",
	trailColor: "var(--text-color-secondary)",
	backgroundColor: "#af1b3f",
});

const CircularProgressBar = ({ text, value, className }) => (
	<CircularProgressbarWithChildren
		value={value}
		strokeWidth={5}
		styles={styles}
		minValue="0.0"
		maxValue="10"
	>
		<p className={className}>{text}</p>
	</CircularProgressbarWithChildren>
);

CircularProgressBar.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	className: PropTypes.string,
};

export default CircularProgressBar;
