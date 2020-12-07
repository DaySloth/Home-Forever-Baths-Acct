const auth = require("../users/auth.js");
const shortid = require('shortid');
const { response } = require("express");

module.exports = (app) => {
    //Login get and post
    app.get('/login', (req, res) => {
        if (req.session.user) {
            res.render("index");
        } else {
            res.render("login")
        };
    });

    app.post('/user/login', (req, res) => {
        auth.login(req.body)
            .then(user => {
                const userObj = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                }
                req.session.user = userObj;
                res.sendStatus(200);
            })
            .catch(error => {
                res.status(500);
                res.send("Incorrect email or password");
            });
    });

    //Logout get, destroys session
    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.render("login");
    });

    //Register redirect and uuid generater
    app.get('/user/register/' + process.env.REGISTER_KEY, (req, res) => {
        const newUrl = '/user/register/' + process.env.REGISTER_KEY + '/' + shortid.generate();
        res.redirect(newUrl);
    });

    app.get('/user/register/' + process.env.REGISTER_KEY + '/:uuid', (req, res) => {
        res.render('register', { uuid: req.params.uuid })
    });

    app.post('/user/register', (req, res) => {
        auth.register(req.body)
            .then(user => {
                const userObj = {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                };

                req.session.user = userObj;
                res.sendStatus(200);
            })
            .catch(error => {
                res.status(500);
                res.send("Email already in use");
            });
    });

    //Deleteing users
    app.get('/user/delete/' + process.env.REGISTER_KEY, (req, res) => {
        res.render("delete");
    });

    app.delete('/user/delete', (req, res) => {
        auth.delete({uuid: req.body.uuid, password: req.body.password})
        .then(response=>{
            res.status(200);
            res.send(response);
        })
        .catch(error => {
            res.status(500);
            res.send("UUID or password incorrect");
        });
    });

}