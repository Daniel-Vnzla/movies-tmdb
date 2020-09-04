import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import PosterContainer from "../../../components/PosterContainer/PosterContainer.js";
import Loading from "../../Loading/Loading.js";

const styles = {
	recommendations: {
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
	loading: {
		width: "250px",
		height: "250px",
	},
};

const Recommendations = ({ programms }) => {
	const { slug, type } = useParams();
	const { data, loading } = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "recommendations",
	});

	const scrollTop = () => {
		window.scrollTo({ top: 0 });
	};
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
		<div onClick={scrollTop} style={styles.recommendations}>
			{data.map((program) => (
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
