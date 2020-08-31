import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setApi } from "../../../../utilsApi/api.js";

import CardVideo from "../../../../common/Cards/CardVideo.js";

const Overview = (props) => {
	const [data, setData] = useState(null);
	const { slug, type } = useParams();

	useEffect(() => {
		const fetchApi = async () => {
			const { data } = await axios.get(
				setApi({
					id: slug,
					type: type.slice(0, -1),
					state: "videos",
				})
			);
			setData(data.results);
		};
		fetchApi();
	}, []);
	return (
		<div>
			{console.log(data)}
			{data ? <CardVideo video={data[0].key} /> : <p>Loading...</p>}
		</div>
	);
};

export default Overview;
