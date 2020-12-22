const db = require("../models");
const bcrypt = require("bcrypt");

const users = {
    register: function (userObj) {
        return new Promise((resolve, reject) => {
            userObj.password = bcrypt.hashSync(userObj.password, 10);
            db.User.findOne({ email: userObj.email }, (err, existingUser) => {
                if (existingUser) {

                    reject("Email already in use");

                } else {
                    db.User.create(userObj)
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
            db.User.findOne({ email: userObj.email }, (err, foundUser) => {
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

    }

};

module.exports = users;