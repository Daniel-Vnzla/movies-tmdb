import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";
import VideoCard from "../../../common/Cards/VideoCard.js";

const Videos = () => {
	const { slug, type } = useParams();
	const videos = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "videos",
	});

	return (
		<div>
			{videos.length > 0 ? (
				videos.map(({ key, name }) => (
					<VideoCard key={key} title={name} video={key} />
				))
			) : (
				<p>No Trailer found</p>
			)}
		</div>
	);
};

export default Videos;
