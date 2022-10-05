import React from "react";
// import ReactDOM  from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Create from "./Create";

//styling for NavBar
const navStyles = {
  display: "inline-block",
  width: "75px",
  padding: "12px 20px",
  margin: "0px 10px 0px 10px",
  textDecoration: "none",
  color: "black",
}

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" style={navStyles}>Home</NavLink>
      <NavLink exact to="/explore" style={navStyles}>Explore</NavLink>
      <NavLink exact to="/create" style={navStyles}>Create</NavLink>
    </nav>

  )
}

//this will display collage pictures of MooMoo's and navbar 
function Home() {
  return (
    <div id="title">
      <header>MooGram!</header>
    </div>
  );
}

//(explore)this will be display the picture the user clicked on with caption, date, info
function Explore() {
  return (
    <div>
      <h1>Explore Cows Here!</h1>
    </div>
  )
}

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
