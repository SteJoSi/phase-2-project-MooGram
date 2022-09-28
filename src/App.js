import React from "react";
// import ReactDOM  from "react";
import {Route} from "react-router-dom";

function Home() {
  return (
    <div>MooGram!</div>
  );
}

function App() {
  return (
    <Route path="/">
      <Home />
    </Route>
  );
}

export default App;
