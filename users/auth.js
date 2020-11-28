const mongoose = require("mongoose");
mongoose.connect('localhost:27017/homeForeverBath');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String
});

const UserDb = mongoose.model('User', userSchema);

const users = {
    register: function(userObj) {
        console.log("register");
        console.log(userObj);
    },

    login: function(userObj) {
        console.log("login");
        console.log(userObj);
    },

    delete: function(userObj) {
        console.log("delete");
        console.log(userObj);
    }

}

module.exports = users;