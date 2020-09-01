import React from "react";

const styles = {
	companieCard: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		marginBottom: "5px",
	},
	img: {
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
				<img src={img} alt={title} />
			</div>
			<p style={styles.title}>{title}</p>
		</div>
	);
};

export default CompanyCard;
