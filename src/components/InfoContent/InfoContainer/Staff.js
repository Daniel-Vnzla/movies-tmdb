import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import CharacterCardContainer from "../../../common/Cards/CharacterCardContainer.js";
import Loading from "../../Loading/Loading.js";

const Staff = (props) => {
	const { slug, type } = useParams();
	const [data, loading] = useFetch({
		id: slug,
		type: type === "movies" || type === "movie" ? "movie" : "tv",
		state: "credits",
	});

	if (loading) return <Loading />;

	return (
		<div>
			{data.cast ? (
				<CharacterCardContainer title="Cast" characteres={data.cast} />
			) : (
				<p>Cast not found</p>
			)}
			{data.crew ? (
				<CharacterCardContainer title="Crew" characteres={data.crew} />
			) : (
				<p>Crew not found</p>
			)}
		</div>
	);
};

export default Staff;
