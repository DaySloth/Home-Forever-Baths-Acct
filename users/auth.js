const UserDb = require("../models/user.js");
const bcrypt = require("bcrypt");

const users = {
    register: function (userObj) {
        return new Promise((resolve, reject) => {
            userObj.password = bcrypt.hashSync(userObj.password, 10);
            UserDb.findOne({ email: userObj.email }, (err, existingUser) => {
                if (existingUser) {

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
        return new Promise((resolve, reject) => {
            UserDb.findOne({ email: userObj.email }, (err, foundUser) => {
                if (foundUser) {
                    const comparePass = bcrypt.compareSync(userObj.password, foundUser.password);
                    if (comparePass) {
                        resolve(foundUser);
                    } else {
                        reject("Incorrect email or password");
                    }
                }else {
                    reject("Incorrect email or password");
                }

            })

        })

    },

    delete: function (userObj) {
        return new Promise((resolve, reject) => {
            if(userObj.password === process.env.DELETE_KEY) {
                UserDb.findOneAndDelete({ uuid: userObj.uuid }, (err, foundUser) => {
                    if(foundUser){
                        resolve(foundUser);
                    }else{
                        reject("Could not find user");
                    }
                });
            }else {
                reject("Incorrect password");
            };
            
        });
    }

};

module.exports = users;