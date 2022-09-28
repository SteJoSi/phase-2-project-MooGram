import React from "react";
// import ReactDOM  from "react";
import {Route} from "react-router-dom";

//this will display data/pictures of MooMoo's 
function Home() {
  return (
    <div>
      <header>MooGram!</header>
    </div>
  );
}

//this will display login page for user to access their profile
function Login() {
  return (
    <div>
      <h1>Login here!</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
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
