const auth = require("../users/auth.js");

module.exports = (app)=> {
    app.get('/login', (req, res)=>{
        res.render("login");
    })

    app.post('/user/login', (req, res) => {
        console.log(req.body);
    });
}