export const DefaultapiAtributes = {
	apiKey: "74d44b9fc3530ad0da458c3a01816d5c",
	type: "movie",
	state: "now_playing",
	page: 1,
	imgPath: "https://image.tmdb.org/t/p/original",
};

export const setApi = ({ type, state, apiKey, page, imgPath }) => {
	return `https://api.themoviedb.org/3/${type}/${state}?api_key=${apiKey}&language=en-US&page=${page}`;
};

export const addImgPathToData = (data) =>
	data.map(({ backdrop_path, poster_path, ...rest }) => ({
		...rest,
		backdrop_path: DefaultapiAtributes.imgPath + backdrop_path,
		poster_path: DefaultapiAtributes.imgPath + poster_path,
	}));
