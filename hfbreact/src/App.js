import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/navTabs.js";
import Wrapper from "./components/Wrapper/wrapper.js";

function App() {
  return (
    <Router>
      <Wrapper>
        <NavTabs />
      </Wrapper>
    </Router>
  );
};

export default App;
