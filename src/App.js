import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Overlay from "./components/Overlay";

import "./scss/app.css";

function App() {
  return (
    <Router>
      <Overlay />
    </Router>
  );
}

export default App;
