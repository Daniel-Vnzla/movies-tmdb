import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";
import VideoCard from "../../../common/Cards/VideoCard.js";
import Loading from "../../Loading/Loading.js";

const styles = {
	loadingContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};

const Videos = () => {
	const { slug, type } = useParams();
	const [videos, loading] = useFetch({
		id: slug,
		type: type === "movies" || type === "movie" ? "movie" : "tv",
		state: "videos",
	});

	if (loading) {
		return (
			<div style={styles.loadingContainer}>
				<div style={styles.loading}>
					<Loading />
				</div>
			</div>
		);
	}
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
