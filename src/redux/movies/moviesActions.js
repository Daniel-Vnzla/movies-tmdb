import axios from "axios";

import { addImgPathToData, api } from "../../utilsApi/api.js";

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
			const { data } = await axios.get(api);
			const newData = addImgPathToData(data.results);
			dispatch(moviesSuccess(newData));
		} catch (err) {
			dispatch(moviesFailure(err.message));
			console.log(err);
		}
	};
};
