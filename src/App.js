import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./common/Header/Header.js";
import SubHeader from "./components/SubHeadBar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <SubHeader />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
