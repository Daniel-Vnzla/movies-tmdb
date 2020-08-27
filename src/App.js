import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./common/Header/Header.js";
import SlideShow from "./components/SlideShow/SlideShow.js";
import CarouselSecondary from "./components/CarouselSecondary/CarouselSecondary.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <SlideShow />
          <CarouselSecondary title="Popular" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
