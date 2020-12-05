const UserDb = require("../models/user.js");
const bcrypt = require("bcrypt");

const users = {
    register: function (userObj) {
        return new Promise((resolve, reject) => {
            userObj.password = bcrypt.hashSync(userObj.password, 10);
            UserDb.findOne({email: userObj.email}, (err, existingUser)=>{
                if(existingUser){

                reject("Email already in use");

                } else {
                    UserDb.create(userObj)
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    reject("Couldn't add user");
                });
                }
            })
            
        })

    },

    login: function (userObj) {
        console.log("login");
        console.log(userObj);
        //const comparePass = bcrypt.compareSync(userObj.password, dbPassword);
    },

    delete: function (userObj) {
        console.log("delete");
        console.log(userObj);
    }

};

module.exports = users;