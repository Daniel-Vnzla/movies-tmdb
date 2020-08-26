import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import moviesReducer from "./redux/movies/moviesReducer.js";

const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;
