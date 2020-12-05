const auth = require("../users/auth.js");
const shortid = require('shortid');

module.exports = (app) => {
    app.get('/login', (req, res) => {
        res.render("login");
    });

    app.post('/user/login', (req, res) => {
        console.log(req.body);
    });

    app.get('/user/register/' + process.env.REGISTER_KEY, (req, res) => {
        const newUrl = '/user/register/' + process.env.REGISTER_KEY + '/' + shortid.generate();
        res.redirect(newUrl);
    })

    app.get('/user/register/' + process.env.REGISTER_KEY + '/:uuid', (req, res) => {
        res.render('register', { uuid: req.params.uuid })
    });

    app.post('/user/register', (req, res) => {
        auth.register(req.body)
        .then(user=>{
            const userObj = {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            };
            
            req.user = userObj;
            res.sendStatus(200);
        })
        .catch(error=>{
            res.status(500);
            res.send("Email already in use");
        });
    });
}