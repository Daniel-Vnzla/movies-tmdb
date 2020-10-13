import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import PosterContainer from "../../PosterContainer/PosterContainer.js";
import Loading from "../../Loading/Loading.js";

const styles = {
	similar: {
		display: "grid",
		gridTemplateColumns: "repeat(3,1fr)",
		gridGap: "5px",
	},
	loadingContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};

const Similar = (props) => {
	const { slug, type } = useParams();
	const [similar, loading] = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "similar",
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
		<div style={styles.similar}>
			{similar ? (
				similar.map((program) => (
					<PosterContainer
						key={program.id}
						title={program.name ? program.name : program.title}
						id={program.id}
						ratingValue={program.vote_average}
						type={type}
						image={"https://image.tmdb.org/t/p/w500" + program.poster_path}
					/>
				))
			) : (
				<p>not similars found</p>
			)}
		</div>
	);
};

export default Similar;
