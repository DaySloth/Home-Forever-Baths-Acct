import React from 'react';
import { useLocation } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';

function NavTabs(){
    const {user, logout} = useAuth0();
    let path = useLocation().pathname;
    console.log(user);

    return (
        <div className="ui secondary pointing menu">
            <a className={path === "/" ? "item active": "item" } href="/">
                Home
            </a>
            <a className={path === "/outstanding" ? "item active": "item" } href="/outstanding">
                Outstanding
            </a>
            <a className={path === "/history" ? "item active": "item" } href="/history">
                History
            </a>
            <div className="right menu">
                {user && (<div className="ui item">Welcome, {user.name}</div>)}
                
                {path === "/login" ?
                    <a className="ui item active" href="/logout">
                        Login
                    </a>
                    : 
                    <a className="ui item" href="/logout" onClick={()=>logout()}>
                        Logout
                    </a> }
                
            </div>
        </div>
    )
};

export default NavTabs;