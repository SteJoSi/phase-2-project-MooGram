import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Explore from "./Explore";
import Create from "./Create";

function App() {
  const [cows, setCowsData] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3001/cows")
          .then(resp => resp.json())
          .then((data) => {
              setCowsData(data)
          });
  }, []);

  function addCow(newCow) {
    setCowsData([newCow, ...cows])
  }

  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/create">
            <Create addCow={addCow}/>
          </Route>

          <Route exact path="/">
            <Home cows={cows} />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
