const defaultApiAtributes = {
	apiKey: "74d44b9fc3530ad0da458c3a01816d5c",
	type: "movie",
	state: "",
	id: "",
	page: 1,
	imgPath: "https://image.tmdb.org/t/p/original",
};

export const setApi = (newApiState) => {
	const apiState = { ...defaultApiAtributes, ...newApiState };
	return `https://api.themoviedb.org/3/${apiState.type}/${
		apiState.id && apiState.state ? apiState.id + "/" : apiState.id
	}${apiState.state}?api_key=${apiState.apiKey}&language=en-US&page=${
		apiState.page
	}`;
};

const elementsToFilter = [
	"backdrop_path",
	"id",
	"imdb_id",
	"original_lenguage",
	"overview",
	"poster_path",
	"revenue",
	"runtime",
	"video",
	"vote_count",
	"belongs_to_collection",
	"last_episode_to_air",
	"next_episode_to_air",
];

const filterObjKeys = (obj, elementsToFilter) => {
	return Object.keys(obj ? obj : {}).reduce((acc, key) => {
		if (!elementsToFilter.includes(key)) {
			return { ...acc, [key]: obj[key] };
		}
		return acc;
	}, {});
};

function objKeysToHumanRedableString(obj) {
	const humanString = (str) =>
		str.charAt(0).toUpperCase() + str.replace(/[_]/g, " ").slice(1);

	return Object.keys(obj ? obj : {}).reduce((acc, key) => {
		return { ...acc, [humanString(key)]: obj[key] };
	}, {});
}

const modifieObjValues = (obj) => {
	return Object.keys(obj).reduce((acc, key) => {
		if (typeof obj[key] === "boolean") {
			return { ...acc, [key]: obj[key] ? "Yes" : "No" };
		} else if (Array.isArray(obj[key])) {
			const objToString = obj[key].map((k) => (k.name ? k.name : k)).join(", ");
			return { ...acc, [key]: objToString };
		}
		return { ...acc, [key]: obj[key] };
	}, {});
};

export const modifieObjData = (obj) => {
	const filter = filterObjKeys(obj, elementsToFilter);
	const humanRedableKeys = objKeysToHumanRedableString(filter);
	const valuesCorrectly = modifieObjValues(humanRedableKeys);
	return valuesCorrectly;
};

export const addImgPathToData = (data) =>
	data.map(({ backdrop_path, poster_path, ...rest }) => ({
		...rest,
		backdrop_path: defaultApiAtributes.imgPath + backdrop_path,
		poster_path: defaultApiAtributes.imgPath + poster_path,
	}));
