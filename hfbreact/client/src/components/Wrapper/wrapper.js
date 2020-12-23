import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InstallContext from "../../utils/context/installContext.js";
import API from "../../utils/api/API.js";
import Home from "../../pages/home/home.js";
import Outstanding from "../../pages/outstanding/outstanding.js";
import History from "../../pages/history/history.js";
import Login from "../../pages/login/login.js";
import {useAuth0} from '@auth0/auth0-react';


function Wrapper() {
  const {user, isAuthenticated} = useAuth0();

  const [dbInstalls, setDbInstalls] = useState({
    all: [],
  });

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

  useEffect(()=>{
    API.getAllInstalls()
    .then(({data})=>{ setDbInstalls({...dbInstalls, all: data }) });
  }, []);

  function payInFull(id) {
    console.log(id);
    //API.payInFull(id);
  };

  function seeInstallDetails(id) {
    console.log(id);
  }

  return (
    <InstallContext.Provider value={{install, setInstall, dbInstalls, payInFull, seeInstallDetails}}>
      
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
