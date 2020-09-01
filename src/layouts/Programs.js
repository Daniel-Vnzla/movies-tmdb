import React, { useEffect, useState } from "react";
import axios from "axios";
import { setApi } from "../utilsApi/api.js";
import { useParams } from "react-router-dom";

import SubHeader from "../components/SubHeader/SubHeader.js";
import InfoContainer from "../components/InfoContent/InfoContainer/InfoContainer.js";

function modifieDataApiToRedableHumanString(obj) {
	const elemToFilter = [
		"backdrop_path",
		"id",
		"imdb_id",
		"original_lenguage",
		"overview",
		"poster_path",
		"revenue",
		"runtime",
		"video",
		"vote_count",
		"belongs_to_collection",
		"last_episode_to_air",
		"next_episode_to_air",
	];

	const humanString = (str) =>
		str.charAt(0).toUpperCase() + str.replace(/[_]/g, " ").slice(1);

	const modifiedObjData = Object.keys(obj ? obj : {}).reduce((acc, key) => {
		if (elemToFilter.indexOf(key) === -1) {
			return { ...acc, [humanString(key)]: obj[key] };
		} else return acc;
	}, {});
	return modifiedObjData;
}

const Programs = () => {
	const { slug, type } = useParams();
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		const api = async () => {
			const { data } = await axios.get(
				setApi({
					id: slug,
					type: type === "movies" ? "movie" : "tv",
				})
			);
			setApiData(data);
		};
		api();
	}, [slug, type]);

	return apiData ? (
		<div>
			{console.log(apiData)}
			<SubHeader
				title={apiData.title ? apiData.title : apiData.name}
				originalTitle={apiData.title ? apiData.original_title : apiData.name}
				overview={apiData.overview}
				backDrop={apiData.backdrop_path}
				poster={apiData.poster_path}
				rating={apiData.vote_average}
			/>
			<InfoContainer data={modifieDataApiToRedableHumanString(apiData)} />
		</div>
	) : (
		<p>Loading...</p>
	);
};

export default Programs;
