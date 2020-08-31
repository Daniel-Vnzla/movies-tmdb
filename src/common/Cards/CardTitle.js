import React from "react";

const styles = {
	title: {
		fontSize: "1.2rem",
		color: "var(--secondary)",
	},
};

const CardTitle = ({ title, children }) => {
	return (
		<div>
			<div className={styles.title}>{title}</div>
			{children}
		</div>
	);
};

export default CardTitle;
