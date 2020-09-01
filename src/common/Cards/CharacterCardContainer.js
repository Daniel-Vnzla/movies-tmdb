import React from "react";
import TitleCard from "./TitleCard.js";
import CharacterCard from "./CharacterCard.js";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
	},
};

const CharacterCardContainer = ({ data }) => {
	return (
		<TitleCard title="Characteres">
			<div style={styles.grid}>
				{data.map((c) => {
					return (
						<CharacterCard
							key={c.id}
							character={c.character}
							name={c.name}
							img={c.profile_path}
						/>
					);
				})}
			</div>
		</TitleCard>
	);
};

export default CharacterCardContainer;
