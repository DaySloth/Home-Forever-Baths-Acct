import React from 'react';
import { useLocation } from "react-router-dom";

function NavTabs(){
    let path = useLocation().pathname;

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
                {path === "/login" ?
                    <a className="ui item active" href="/logout">
                        Login
                    </a>
                    : 
                    <a className="ui item" href="/logout">
                        Logout
                    </a> }
                
            </div>
        </div>
    )
};

export default NavTabs;