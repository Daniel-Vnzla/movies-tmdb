import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import CharacterCardContainer from "../../../common/Cards/CharacterCardContainer.js";
import Loading from "../../Loading/Loading.js";

const styles = {
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

const Staff = (props) => {
	const { slug, type } = useParams();
	const { data, loading } = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
		state: "credits",
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
			{data.cast ? (
				<CharacterCardContainer title="Cast" characteres={data.cast} />
			) : (
				<p>Cast not found</p>
			)}
			{data.crew ? (
				<CharacterCardContainer title="Crew" characteres={data.crew} />
			) : (
				<p>Crew not found</p>
			)}
		</div>
	);
};

export default Staff;
