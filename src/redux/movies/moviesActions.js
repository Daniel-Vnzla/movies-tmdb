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

export const moviesFetch = () => {
	return async (dispatch) => {
		dispatch(moviesRequest());
		try {
			const fetchApi = {
				topRating: await axios.get(setApi({ state: "top_rated" })),
				popular: await axios.get(setApi({ state: "popular" })),
				nowPlaying: await axios.get(setApi({ state: "now_playing" })),
				upcoming: await axios.get(setApi({ state: "upcoming" })),
			};

			const fetchValues = Object.values(fetchApi);
			const fetchKeys = Object.keys(fetchApi);

			const modifiedData = fetchValues.reduce((acc, movies, i) => {
				return {
					...acc,
					[fetchKeys[i]]: addImgPathToData(movies.data.results),
				};
			}, {});

			dispatch(moviesSuccess(modifiedData));
		} catch (err) {
			dispatch(moviesFailure(err.message));
			console.log(err);
		}
	};
};
