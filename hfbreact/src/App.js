import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/navTabs.js";
import Wrapper from "./components/Wrapper/wrapper.js";
import Home from "./pages/home/home.js";
import Outstanding from "./pages/outstanding/outstanding.js";
import History from "./pages/history/history.js";
import Login from "./pages/login/login.js";
import UserContext from "./utils/context/userContext.js";

function App() {

  const { loggedIn } = useContext(UserContext)

  return (
    <Router>
        <Wrapper>

          <NavTabs />

          <Route exact path="/">
            {loggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>

          <Route path="/outstanding">
            {loggedIn ? <Outstanding /> : <Redirect to="/login" />}
          </Route>

          <Route path="/history">
            {loggedIn ? <History /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Wrapper>
    </Router>
  );
}

export default App;
