import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import CharacterCardContainer from "../../../common/Cards/CharacterCardContainer.js";

const Staff = (props) => {
	const { slug, type } = useParams();
	const credits = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "credits",
	});

	return (
		<div>
			{credits.cast ? (
				<CharacterCardContainer title="Cast" characteres={credits.cast} />
			) : (
				<p>Cast not found</p>
			)}
			{credits.crew ? (
				<CharacterCardContainer title="Crew" characteres={credits.crew} />
			) : (
				<p>Crew not found</p>
			)}
		</div>
	);
};

export default Staff;
