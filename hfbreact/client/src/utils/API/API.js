import axios from 'axios';

const API = {
    login: (userObj)=> {
        axios.post('/user/login', userObj)
        .then(res=>{  console.log("response", res.data)});
    },
    register: (userObj)=>{
        axios.post('/user/register', userObj)
        .then(res=> {console.log("register", res)});
    }
};

export default API;