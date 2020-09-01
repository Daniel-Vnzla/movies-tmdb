import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../../../customHooks/CustomHooks.js";

import VideoCard from "../../../../common/Cards/VideoCard.js";
import CharacterCardContainer from "../../../../common/Cards/CharacterCardContainer.js";
import CompaniesCardContainer from "../../../../common/Cards/CompaniesCardContainer.js";

const Overview = () => {
	const { slug, type } = useParams();
	const video = useFetch({
		id: slug,
		type: type.slice(0, -1),
		state: "videos",
	});
	const credits = useFetch({
		id: slug,
		type: type.slice(0, -1),
		state: "credits",
	});
	const companies = useFetch({
		id: slug,
		type: type.slice(0, -1),
	});
	return (
		<div>
			{console.log(companies)}
			{video ? <VideoCard video={video[0].key} /> : <p>Loading...</p>}
			{credits ? (
				<CharacterCardContainer data={credits.cast.slice(0, 6)} />
			) : (
				<p>Loading...</p>
			)}
			{companies ? (
				<CompaniesCardContainer data={companies.production_companies} />
			) : (
				<p>Loading....</p>
			)}
		</div>
	);
};

export default Overview;
