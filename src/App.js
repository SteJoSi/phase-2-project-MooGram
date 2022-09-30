import React from "react";
// import ReactDOM  from "react";
import { Route } from "react-router-dom";

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
    <div >
      <Route path="/">
        <Home />
      </Route>

      <Route path="/explore">
        <Explore />
      </Route>

      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
}

export default App;
