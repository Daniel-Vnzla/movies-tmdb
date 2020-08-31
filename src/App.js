import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./common/Header/Header.js";
import Home from "./layouts/Home.js";
import Programs from "./layouts/Programs.js";
import PageError404 from "./layouts/PageError404.js";

import { useRedux } from "./CustomHooks.js";

function App() {
  const apiData = useRedux();

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/programs/:type/:slug" component={Programs} />
        <Route path="/" component={PageError404} />
      </Switch>
    </Router>
  );
}

export default App;
