import axios from 'axios';

const API = {
    getUser: ()=> {
        return new Promise((resolve, reject)=>{
            axios.get('/user')
            .then(res=>{resolve(res.data)});
        })
    },
    login: (userObj)=> {
        return new Promise((resolve, reject)=>{
            axios.post('/user/login', userObj)
            .then(res=>{resolve(res.data)})
            .catch(err=>{reject(err)});
        })
    },
    register: (userObj)=>{
        return new Promise ((resolve, reject)=> {
            axios.post('/user/register', userObj)
            .then(res=> { resolve(res.data) })
            .catch(err=> { reject("Email already in use") });
        })
    }
};

export default API;