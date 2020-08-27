const defaultApiAtributes = {
	apiKey: "74d44b9fc3530ad0da458c3a01816d5c",
	type: "movie",
	state: "top_rated",
	page: 1,
	imgPath: "https://image.tmdb.org/t/p/original",
};

export const setApi = (newApiState) => {
	const apiState = { ...defaultApiAtributes, ...newApiState };
	return `https://api.themoviedb.org/3/${apiState.type}/${apiState.state}?api_key=${apiState.apiKey}&language=en-US&page=${apiState.page}`;
};

export const addImgPathToData = (data) =>
	data.map(({ backdrop_path, poster_path, ...rest }) => ({
		...rest,
		backdrop_path: defaultApiAtributes.imgPath + backdrop_path,
		poster_path: defaultApiAtributes.imgPath + poster_path,
	}));
