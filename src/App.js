import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Explore from "./Explore";
import Create from "./Create";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
