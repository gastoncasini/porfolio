import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Overlay from "./components/Overlay";
import Home from "./components/Home";

import "./scss/app.css";

function App() {
  return (
    <Router>
      <Overlay />
      <Home />
    </Router>
  );
}

export default App;
