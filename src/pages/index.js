import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./home";
import NotFound from "./404";
// import Resume from "./resume";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Resume" component={Resume} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
