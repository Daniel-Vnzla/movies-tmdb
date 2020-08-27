import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./common/Header/Header.js";
import SlideShow from "./components/SlideShow/SlideShow.js";
import CarouselSecondary from "./components/CarouselSecondary/CarouselSecondary.js";

import { useRedux } from "./CustomHooks.js";

function App() {
  const apiData = useRedux();
  const slideShowItems = apiData.movies.topRating.slice(0, 8);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <SlideShow data={slideShowItems} />
          <CarouselSecondary
            title="Popular"
            data={apiData}
            typeData="popular"
          />
          <CarouselSecondary
            title="Now Playing"
            data={apiData}
            typeData="nowPlaying"
          />
          <CarouselSecondary
            title="Upcoming"
            data={apiData}
            typeData="upcoming"
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
