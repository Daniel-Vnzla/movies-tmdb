import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./common/Header/Header.js";
import SlideShow from "./components/SlideShow/SlideShow.js";
import SlideShowCard from "./components/SlideShow/SlideShowCard.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <SlideShow>
            <SlideShowCard />
            <SlideShowCard />
            <SlideShowCard />
          </SlideShow>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
