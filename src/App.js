import React from "react";
// import ReactDOM  from "react";
import { NavLink, Route, Switch } from "react-router-dom";

//styling for NavBar
const navStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
}

function NavBar() {
  return (
    <div>
      <NavLink exact to="/" style={navStyles}>Home</NavLink>
      <NavLink exact to="/explore" style={navStyles}>Explore</NavLink>
      <NavLink exact to="/create" style={navStyles}>Create</NavLink>
    </div>

  )
}

//this will display collage pictures of MooMoo's and navbar 
function Home() {
  return (
    <div>
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

//(create) form with photo upload, caption, date
function Create() {
  return (
    <div>
      <h1>Uploade here!</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
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
  );
}

export default App;
