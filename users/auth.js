const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/homeForeverBath", { useNewUrlParser: true,  useUnifiedTopology: true });
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

};

module.exports = users;