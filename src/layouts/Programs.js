import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import SubHeader from "../components/SubHeader/SubHeader.js";
import InfoDetailsCard from "../components/InfoCardContainer/InfoDetailsCard/InfoDetailsCard.js";

function modifieApiData(obj) {
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
				`https://api.themoviedb.org/3/${type.slice(
					0,
					-1
				)}/${slug}?api_key=74d44b9fc3530ad0da458c3a01816d5c&language=en-US`
			);
			setApiData(data);
		};
		api();
	}, [slug, type]);

	return apiData ? (
		<div>
			{console.log(apiData)}
			<SubHeader
				title={apiData.title}
				originalTitle={apiData.original_title}
				overview={apiData.overview}
				backDrop={apiData.backdrop_path}
				poster={apiData.poster_path}
				rating={apiData.vote_average}
			/>
			<section className="content-section">
				<InfoDetailsCard data={modifieApiData(apiData)} />
			</section>
		</div>
	) : (
		<p>Loading...</p>
	);
};

export default Programs;
