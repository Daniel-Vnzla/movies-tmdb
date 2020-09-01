import React from "react";
import PropTypes from "prop-types";

import TitleCard from "./TitleCard.js";
import CharacterCard from "./CharacterCard.js";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gridGap: "5px",
	},
};

const CharacterCardContainer = ({ characteres, title }) => {
	return (
		<TitleCard title={title}>
			<div style={styles.grid}>
				{characteres.map((c) => {
					return (
						<CharacterCard
							key={c.id + Math.floor(Math.random() * 1000000)}
							character={c.character}
							name={c.name}
							img={c.profile_path}
							department={c.department}
						/>
					);
				})}
			</div>
		</TitleCard>
	);
};

CharacterCardContainer.propTypes = {
	characteres: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
};

export default CharacterCardContainer;
