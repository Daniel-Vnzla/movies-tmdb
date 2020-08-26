import {
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE,
} from "./moviesTypes.js";

const initialState = {
	movies: {
		topRating: [],
		latest: [],
		popular: [],
		upcoming: [],
	},
	tvShows: {
		topRating: [],
		latest: [],
		popular: [],
		upcoming: [],
	},
	loading: false,
	error: "",
};

const moviesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_MOVIES_REQUEST:
			return {
				...state,
				loading: true,
			};

		case FETCH_MOVIES_SUCCESS:
			return {
				...state,
				movies: {
					...state.movies,
					topRating: payload,
				},
				loading: false,
			};

		case FETCH_MOVIES_FAILURE:
			return {
				...state,
				error: payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default moviesReducer;
