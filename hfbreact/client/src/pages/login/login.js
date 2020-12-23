import React, { useContext, useState } from 'react';
import {useAuth0} from '@auth0/auth0-react';
import "./login.css";

function Login(){

    const {loginWithRedirect} = useAuth0();

    return (
        <div className=" container loginBtn">
            <label>You must login to access this page</label>
            <button className="ui black button large fluid" type="submit" onClick={()=>loginWithRedirect()}>Login</button>
        </div>
    )
};

export default Login;