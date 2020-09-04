import React, { useEffect, useState } from "react";
import axios from "axios";
import { setApi, modifieObjData } from "../utilsApi/api.js";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";

import SubHeader from "../components/SubHeader/SubHeader.js";
import InfoContainer from "../components/InfoContent/InfoContainer/InfoContainer.js";

const Programs = () => {
	const history = useHistory();
	const { url } = useRouteMatch();
	const { slug, type } = useParams();
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		if (url !== `/programs/${type}/${slug}/overview`) {
			history.push(`/programs/${type}/${slug}/overview`);
		}
		const api = async () => {
			const { data } = await axios.get(
				setApi({
					id: slug,
					type: type === "movies" ? "movie" : "tv",
				})
			);
			setApiData(data);
		};
		api();
	}, [slug, type, url, history]);

	return apiData ? (
		<div>
			<SubHeader
				title={apiData.title ? apiData.title : apiData.name}
				originalTitle={apiData.title ? apiData.original_title : apiData.name}
				overview={apiData.overview}
				backDrop={apiData.backdrop_path}
				poster={apiData.poster_path}
				rating={apiData.vote_average}
			/>
			<InfoContainer data={modifieObjData(apiData)} />
		</div>
	) : (
		<p>Loading...</p>
	);
};

export default Programs;
