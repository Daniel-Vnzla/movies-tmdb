import React from "react";
import PropTypes from "prop-types";

const styles = {
	title: {
		fontSize: "1.2rem",
		color: "var(--text-color-secondary)",
		marginTop: "20px",
		marginBottom: "5px",
	},
};

const CardTitle = ({ title, children }) => {
	return (
		<div>
			<div style={styles.title}>{title}</div>
			{children}
		</div>
	);
};

CardTitle.propTypes = {
	children: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
};

export default CardTitle;
