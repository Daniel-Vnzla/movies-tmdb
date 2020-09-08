import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import CompaniesCardContainer from "../../../common/Cards/CompaniesCardContainer.js";
import Loading from "../../Loading/Loading.js";

const styles = {
	loadingContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};

const Companies = (props) => {
	const { slug, type } = useParams();
	const [companies, loading] = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
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
		<>
			{companies.production_companies && (
				<CompaniesCardContainer companies={companies.production_companies} />
			)}
		</>
	);
};

export default Companies;
