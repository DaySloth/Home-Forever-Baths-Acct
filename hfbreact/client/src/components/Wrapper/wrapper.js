import React, { useState } from 'react';
import InstallContext from "../../utils/context/installContext.js";
import UserContext from "../../utils/context/userContext.js";
import API from "../../utils/api/API.js";

function Wrapper(props){

    const [user, setUser] = useState({
        loggedIn: true,
        first_name: "",
        last_name: "",
        email: "",
        errors: []
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
        notes: ""
    });

    function loginUser(userObj) {
        API.login(userObj)
    }

    return(

        <InstallContext.Provider value={install}>
            <UserContext.Provider value={{user, loginUser}}>
                {props.children}
            </UserContext.Provider>
        </InstallContext.Provider>

    )
};

export default Wrapper;