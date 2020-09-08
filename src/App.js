import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moviesFetch } from "./redux/movies/moviesActions.js";

import Header from "./common/Header/Header.js";
import Home from "./layouts/Home.js";
import Programs from "./layouts/Programs.js";
import PageError404 from "./layouts/PageError404.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(moviesFetch());
    };
    fetchData();
  }, [dispatch]);
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
