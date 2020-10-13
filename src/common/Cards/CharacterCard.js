import React from "react";
import PropTypes from "prop-types";
import noImage from "../../images/no-image.jpg";

const styles = {
	characterCard: {
		background: "var(--terciary)",
		display: "grid",
		gridTemplateColumns: "115px 1fr",
		borderRadius: "var(--border-radius)",
	},
	img: {
		height: "100%",
		minHeight: "170px",
	},
	info: {
		padding: "10px",
	},
	name: {
		fontSize: "1.5rem",
		fontStyle: "italic",
		color: "var(--primary)",
	},
	character: {
		fontSize: "1.2rem",
		color: "var(--text-color-terciary)",
	},

	department: {
		marginTop: "auto",
	},
};

const CharacterCard = ({ character, name, img, department }) => {
	return (
		<div style={styles.characterCard}>
			<div style={styles.img}>
				<img
					src={img ? `https://image.tmdb.org/t/p/w500/${img}` : noImage}
					alt={character}
				/>
			</div>
			<div style={styles.info}>
				<p style={styles.name}>{name}</p>
				<p style={styles.character}>{character}</p>
				{department && <p style={styles.department}>{department}</p>}
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.string,
	department: PropTypes.string,
};

export default CharacterCard;
