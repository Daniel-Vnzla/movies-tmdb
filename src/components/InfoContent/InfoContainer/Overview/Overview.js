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
			{console.log("video: ", credits)}
			{video.length > 0 && (
				<VideoCard title={video[0].name} video={video[0].key} />
			)}
			{credits.cast && (
				<CharacterCardContainer
					title="Cast"
					characteres={credits.cast.slice(0, 6)}
				/>
			)}
			{companies.production_companies && (
				<CompaniesCardContainer companies={companies.production_companies} />
			)}
		</div>
	);
};

export default Overview;
