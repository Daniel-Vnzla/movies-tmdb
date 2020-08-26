import axios from "axios";

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

const apiAtributes = {
	apiKey: "74d44b9fc3530ad0da458c3a01816d5c",
	type: "movie",
	state: "now_playing",
	page: 1,
};
const api = `https://api.themoviedb.org/3/${apiAtributes.type}/${apiAtributes.state}?api_key=${apiAtributes.apiKey}&language=en-US&page=${apiAtributes.page}`;

export const moviesFetch = () => {
	return async (dispatch) => {
		dispatch(moviesRequest());
		try {
			const { data } = await axios.get(api);
			dispatch(moviesSuccess(data.results));
		} catch (err) {
			dispatch(moviesFailure(err.message));
			console.log(err);
		}
	};
};
