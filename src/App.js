import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overlay from "./components/Overlay";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Proyects from "./components/pages/Proyects";

import "./scss/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initAnimation: true,
      loading: false
    };

    this.interval = null;
    this.triggerLoad = this.triggerLoad.bind(this);
  }

  componentDidMount() {
    this.interval = setTimeout(
      () => this.setState({ initAnimation: false }),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  triggerLoad() {
    this.setState({ loading: true });
    this.interval = setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    const { initAnimation, loading } = this.state;
    let modifiers = [];
    if (initAnimation) {
      modifiers = modifiers.concat("init");
    }
    if (loading) {
      modifiers = modifiers.concat("loading");
    }

    return (
      <Router>
        {initAnimation && <Overlay />}
        <Switch>
          <Route strict exact path="/">
            <Home
              modifiers={modifiers}
              init={initAnimation}
              loading={loading}
              triggerLoad={this.triggerLoad}
            />
          </Route>
          <Route strict exact path="/about">
            <About
              modifiers={modifiers}
              init={initAnimation}
              loading={loading}
              triggerLoad={this.triggerLoad}
            />
          </Route>

          <Route exact strict path="/proyects">
            <Proyects
              modifiers={modifiers}
              init={initAnimation}
              loading={loading}
              triggerLoad={this.triggerLoad}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
