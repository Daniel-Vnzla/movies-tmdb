import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";
import PosterContainer from "../../PosterContainer/PosterContainer.js";

const styles = {
	similar: {
		display: "grid",
		gridTemplateColumns: "repeat(3,1fr)",
		gridGap: "5px",
	},
};

const Similar = (props) => {
	const { slug, type } = useParams();
	const similar = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "similar",
	});

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
						image={"https://image.tmdb.org/t/p/original" + program.poster_path}
					/>
				))
			) : (
				<p>not similars found</p>
			)}
		</div>
	);
};

export default Similar;
