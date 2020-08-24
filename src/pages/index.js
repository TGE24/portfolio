import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./home";
import NotFound from "./404";
import Project from "./projects";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
