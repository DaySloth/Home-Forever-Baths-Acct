import React, { useState } from 'react';
import InstallContext from "../../utils/context/installContext.js";
import UserContext from "../../utils/context/userContext.js";
import Auth from "../../utils/auth/auth.js";

function Wrapper(props){

    const [user, setUser] = useState({
        loggedIn: false,
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
        console.log(userObj);
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