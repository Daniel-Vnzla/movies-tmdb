import React from "react";
import PropTypes from "prop-types";

const styles = {
	companieCard: {
		width: "fit-content",
		height: "70px",
		marginBottom: "5px",
	},
	img: {
		margin: "5px",
		width: "auto",
		height: "100%",
		padding: "5px",
		background: "#fff",
	},
	title: {
		color: "var(--primary)",
	},
};

const CompanyCard = ({ img, title }) => {
	return (
		<div style={styles.companieCard}>
			<div style={styles.img}>
				<img style={styles.img} src={img} alt={title} />
			</div>
		</div>
	);
};

CompanyCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default CompanyCard;
