import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { moviesFetch } from "./redux/movies/moviesActions.js";

export const useRedux = (props) => {
	const movies = useSelector((movies) => movies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(moviesFetch());
	}, [dispatch]);

	return movies;
};
