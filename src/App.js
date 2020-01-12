import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overlay from "./components/Overlay";
import Home from "./components/Home";
import About from "./components/About";

import "./scss/app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
