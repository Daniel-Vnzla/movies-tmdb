import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { moviesFetch } from "./redux/movies/moviesActions.js";

import Header from "./common/Header/Header.js";
import SlideShow from "./components/SlideShow/SlideShow.js";
import SlideShowCard from "./components/SlideShow/SlideShowCard.js";

function App() {
  console.log("render");
  const movies = useSelector(({ movies }) => movies);
  const dispatch = useDispatch();

  const moviesSlideShow = movies.topRating
    .slice(0, 6)
    .map((movie) => <SlideShowCard key={movie.id} data={movie} />);

  useEffect(() => {
    dispatch(moviesFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <SlideShow>{moviesSlideShow}</SlideShow>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
