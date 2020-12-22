const mongoose = require("mongoose");
const install = require("./install.js");
const user = require("./user.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/homeForeverBath", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

module.exports = {
    Install: install,
    User: user
};