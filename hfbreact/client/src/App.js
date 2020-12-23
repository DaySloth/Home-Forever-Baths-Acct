import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/navTabs.js";
import Home from "./pages/home/home.js";
import Outstanding from "./pages/outstanding/outstanding.js";
import History from "./pages/history/history.js";
import Login from "./pages/login/login.js";
import UserContext from "./utils/context/userContext.js";

function App() {

  const { user } = useContext(UserContext);
  return (
    <Router>
          <NavTabs />

          <Route exact path="/">
            {user.loggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>

          <Route path="/outstanding">
            {user.loggedIn ? <Outstanding /> : <Redirect to="/login" />}
          </Route>

          <Route path="/history">
            {user.loggedIn ? <History /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            <Login />
          </Route>
    </Router>
  );
}

export default App;
