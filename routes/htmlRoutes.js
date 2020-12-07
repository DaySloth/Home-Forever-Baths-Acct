const installDb = require('../models/install.js');

module.exports = (app) => {

    app.get("/", (req, res) => {
        if (req.session.user) {
            res.render("index");
        } else {
            res.redirect("/login")
        };
    });

    app.get("/outstanding", (req, res) => {
        if (req.session.user) {
            installDb.find({payment_status: "Outstanding"}).lean()
            .then(data=>{
                if(data.length > 0){
                    res.render("outstanding", {outstanding: data});
                }else {
                    res.render('outstanding');
                };
            })
            .catch(error=>{
                console.log(error)
            });
            
        } else {
            res.redirect("/login")
        };
    });

    app.get("/history", (req, res) => {
        if (req.session.user) {
            res.render("history");
        } else {
            res.redirect("/login")
        };
    });

}