import axios from "axios";

import { addImgPathToData, setApi } from "../../utilsApi/api.js";

import {
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE,
} from "./moviesTypes.js";

const moviesRequest = () => ({
	type: FETCH_MOVIES_REQUEST,
});

const moviesSuccess = (movies) => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: movies,
});

const moviesFailure = (errors) => ({
	type: FETCH_MOVIES_FAILURE,
	payload: errors,
});

const addImgPathToObj = (obj) => {
	const values = Object.values(obj);
	const keys = Object.keys(obj);

	return values.reduce((acc, movies, i) => {
		return {
			...acc,
			[keys[i]]: addImgPathToData(movies.data.results),
		};
	}, {});
};

export const moviesFetch = () => {
	return async (dispatch) => {
		dispatch(moviesRequest());
		try {
			const fetchMovies = {
				topRating: await axios.get(setApi({ state: "top_rated" })),
				popular: await axios.get(setApi({ state: "popular" })),
				nowPlaying: await axios.get(setApi({ state: "now_playing" })),
				upcoming: await axios.get(setApi({ state: "upcoming" })),
			};

			const fetchTvShows = {
				upcoming: await axios.get(setApi({ state: "top_rated", type: "tv" })),
				popular: await axios.get(setApi({ state: "popular", type: "tv" })),
				nowPlaying: await axios.get(
					setApi({ state: "on_the_air", type: "tv" })
				),
			};

			const moviesModified = addImgPathToObj(fetchMovies);
			const tvShowsModified = addImgPathToObj(fetchTvShows);

			dispatch(
				moviesSuccess({ movies: moviesModified, tvShows: tvShowsModified })
			);
		} catch (err) {
			dispatch(moviesFailure(err.message));
			console.log(err);
		}
	};
};
