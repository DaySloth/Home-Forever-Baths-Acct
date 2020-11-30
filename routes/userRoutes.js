const auth = require("../users/auth.js");

module.exports = (app)=> {
    app.get('/login', (req, res)=>{
        res.render("login");
    });

    app.post('/user/login', (req, res) => {
        console.log(req.body);
    });

    app.get('/user/register/'+ process.env.REGISTER_KEY + '/:uuid', (req, res)=>{
        res.render('register', {uuid: req.params.uuid})
    });

    app.post('/user/register', (req, res) => {
        console.log(req.body);
    });
}