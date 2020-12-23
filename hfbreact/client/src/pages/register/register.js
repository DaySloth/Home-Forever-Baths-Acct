import React, {useEffect, useState} from 'react';
import './register.css';

function Register() {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_pass: ""
    });

    const [message, setMessage] = useState({
        error: "",
        message: "",
        pass_error: "",
    });

    useEffect( ()=> {
        if(user.password){
            if(user.password !== user.confirm_pass) {
                setMessage({...message, pass_error: "Passwords must match", message: ""});
            } else {
                setMessage({...message, pass_error: "", message: "Passwords matching"});
            }
        }
        
    }, [user.confirm_pass]);

    function handleInputChange(event) {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    };

    function registerUser(event) {
        event.preventDefault();
        const {first_name, last_name, email, password} = user;
        let userObj = {
            first_name,
            last_name,
            email,
            password
        };
        console.log(userObj);
    };

    return (
        <div>
            <h2>Register User</h2>
            <hr />

            <form className="ui form container" onSubmit={registerUser}>
                <div className="error-message">{message.error}</div>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="first_name" placeholder="John" onChange={handleInputChange} required />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="Doe" onChange={handleInputChange} required />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="your@email.com" onChange={handleInputChange} required />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInputChange} required />
                </div>
                <div className="error-message">{message.pass_error}</div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_pass" onChange={handleInputChange} required />
                </div>
                <div className="error-message">{message.pass_error}</div>
                <div className="message">{message.message}</div>
                
                <button className="ui button" type="submit">Register</button>
            </form>
        </div>
    )
};

export default Register;