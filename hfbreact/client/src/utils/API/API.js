import axios from 'axios';
const API = {
    getOutstandingInstalls: ()=> {
        return new Promise((resolve, reject)=>{
            axios.get("/api/install/outstanding")
            .then(res=>{resolve(res)})
        })
    },
    getAllInstalls: ()=>{
        return new Promise((resolve, reject)=>{
            axios.get("/api/install")
            .then(res=>{resolve(res)})
        })
    }
};

export default API;