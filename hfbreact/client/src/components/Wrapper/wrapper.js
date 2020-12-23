import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InstallContext from "../../utils/context/installContext.js";
//import API from "../../utils/api/API.js";
import Home from "../../pages/home/home.js";
import Outstanding from "../../pages/outstanding/outstanding.js";
import History from "../../pages/history/history.js";
import Login from "../../pages/login/login.js";
import {useAuth0} from '@auth0/auth0-react';


function Wrapper() {
  const {user, isAuthenticated} = useAuth0();

  const [install, setInstall] = useState({
    installDate: "",
    installName: "",
    installType: "",
    price: 0,
    specialOpts: [],
    salesman: "",
    installer: "",
    fees: [],
    paymentStatus: "",
    paymentReceived: "",
    paymentMethod: "",
    notes: "",
  });


  return (
    <InstallContext.Provider value={install}>
      
        

        {isAuthenticated ? (
          <>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/outstanding">
            <Outstanding />
          </Route>

          <Route exact path="/history">
            <History />
          </Route>
          </>
        ) :
        <Login />
        }

      
    </InstallContext.Provider>
  );
}

export default Wrapper;
