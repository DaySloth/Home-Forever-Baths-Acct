import React, { useContext, useState } from 'react';
import UserContext from "../../utils/context/userContext.js";


function Login(){

    const { loginUser } = useContext(UserContext)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function login(event){
        event.preventDefault();
        loginUser(user);
    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    return (
        <form className="ui form container" onSubmit={login}>
        <div id="errorMessage"></div>
        <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" onChange={handleInputChange} />
        </div>
        <div className="field">
            <label>Password</label>
            <input type="password" name="password" onChange={handleInputChange} />
        </div>
    
        <button className="ui button" type="submit">Login</button>
    </form>
    )
};

export default Login;