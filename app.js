//Server Variables
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;

//Using js and css files
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//setting view-engine
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting express-session
const session = require("express-session");
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

//setting database connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/homeForeverBath", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//sending app to routes
const htmlRoutes = require("./routes/htmlRoutes")(app);
//const apiRoutes = require("./routes/apiRoutes")(app);
const userRoutes = require("./routes/userRoutes")(app);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});