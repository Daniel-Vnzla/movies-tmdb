import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import PosterContainer from "../../../components/PosterContainer/PosterContainer.js";

const styles = {
	recommendations: {
		display: "grid",
		gridTemplateColumns: "repeat(3,1fr)",
		gridGap: "5px",
	},
};

const Recommendations = ({ programms }) => {
	const { slug, type } = useParams();
	const recommendations = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "recommendations",
	});

	const scrollTop = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<div onClick={scrollTop} style={styles.recommendations}>
			{recommendations.map((program) => (
				<PosterContainer
					key={program.id}
					title={program.name ? program.name : program.title}
					id={program.id}
					ratingValue={program.vote_average}
					type={type}
					image={"https://image.tmdb.org/t/p/original" + program.poster_path}
				/>
			))}
		</div>
	);
};

export default Recommendations;
