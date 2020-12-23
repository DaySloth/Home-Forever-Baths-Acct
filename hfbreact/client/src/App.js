import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/wrapper.js';
import NavTabs from "./components/NavTabs/navTabs.js";
import {useAuth0} from '@auth0/auth0-react';
import './app.css';

function App() {

  return (
    <Router>
    <NavTabs />
    {useAuth0().isLoading ? <div className="spinner"><i className="fas fa-cog fa-spin fa-10x"></i></div> : <Wrapper/>}
    </Router>
  );
}

export default App;
