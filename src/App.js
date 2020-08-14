import React, { Component } from "react";
import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Clock from "./component/welcome/clock/Clock";
import Contact from "./component/contact/Contact";

import Navigation from "./component/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Page404 from "./component/page404/Page404";

class App extends Component {
  render() {
    return (
      <div>
        {/* define our routes */}
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="eric" />}
          />
          <Route
            path="/welcome/:name"
            render={(props) => <Welcome name={props.match.params.name} />}
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
