import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setApi } from "../utilsApi/api.js";
import { moviesFetch } from "../redux/movies/moviesActions.js";

export const useRedux = (props) => {
	const movies = useSelector((movies) => movies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(moviesFetch());
	}, [dispatch]);

	return movies;
};

export const useFetch = (apiState) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			try {
				const { data } = await axios.get(setApi(apiState));
				setData(data.results ? data.results : data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchApi(); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return data;
};
