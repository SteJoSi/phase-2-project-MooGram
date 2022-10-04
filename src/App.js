import React from "react";
// import ReactDOM  from "react";
import { NavLink, Route, Switch } from "react-router-dom";

//styling for NavBar
const navStyles = {
  display: "inline-block",
  width: "50px",
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

//(create) form with photo upload, caption, date
function Create() {
  return (
    <div>
      <div>
        <h1 id="formTitle">Upload here!</h1>
      </div>
      <form id="create">
        <div>
          <p>Username</p>
          <input type="text" name="username" />
        </div>
        <div>
          <p>Image</p>
          <input type="url" name="image" />
        </div>
        <div>
          <p>Location</p>
          <input type="text" name="location" />
        </div>
        <div>
          <p>Date</p>
          <input type="text" name="date" />
        </div>
        <div>
          <p>Caption</p>
          <input type="caption" name="caption" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
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
