import React from "react";

const UserContext = React.createContext({
    loggedIn: false,
    first_name: "",
    last_name: "",
    email: "",
});

export default UserContext;
