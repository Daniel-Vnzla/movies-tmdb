import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../customHooks/CustomHooks.js";

import CompaniesCardContainer from "../../../common/Cards/CompaniesCardContainer.js";

const Companies = (props) => {
	const { slug, type } = useParams();
	const companies = useFetch({
		id: slug,
		type: type === "movies" ? "movie" : "tv",
	});

	return (
		<>
			{companies.production_companies && (
				<CompaniesCardContainer companies={companies.production_companies} />
			)}
		</>
	);
};

export default Companies;
