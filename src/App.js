import React from "react";
// import ReactDOM  from "react";
import { NavLink, Route, Switch } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/explore">Explore</NavLink>
      <NavLink exact to="/create">Create</NavLink>
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
