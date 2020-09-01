import React from "react";

const styles = {
	characterCard: {
		display: "grid",
		gridTemplateColumns: "110px 1fr",
		marginBottom: "5px",
	},
	img: {
		minHeight: "168px",
	},
	info: {
		padding: "10px",
	},
	character: {
		fontSize: "1.5rem",
		fontStyle: "italic",
		color: "var(--primary)",
	},
	name: {
		fontSize: "1.2rem",
		color: "var(--text-color-secondary)",
	},
};

const CharacterCard = ({ character, name, img }) => {
	return (
		<div style={styles.characterCard}>
			<div style={styles.img}>
				<img
					src={`https://image.tmdb.org/t/p/original/${img}`}
					alt={character}
				/>
			</div>
			<div style={styles.info}>
				<p style={styles.character}>{character}</p>
				<p style={styles.name}>{name}</p>
			</div>
		</div>
	);
};

export default CharacterCard;
