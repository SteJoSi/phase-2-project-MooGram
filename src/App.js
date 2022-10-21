import React from "react";
import { Route, Switch } from "react-router-dom";
// import ReactDOM  from "react";

import Create from "./Create";
import NavBar from "./NavBar";
import Home from "./Home";
import Explore from "./Explore";

// function Footer() {
//   return (
//     <div id="footer">  
//     <footer>
//       <p>MooGram, LLC</p>
//       <a href="#">support@moogram.com</a>
//     </footer>
//     </div>
//   )
// }

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
