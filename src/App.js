import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./common/Header/Header.js";
import Home from "./layouts/Home.js";
import PageError404 from "./layouts/PageError404.js";

import { useRedux } from "./CustomHooks.js";

function App() {
  const apiData = useRedux();

  console.log(apiData);
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
