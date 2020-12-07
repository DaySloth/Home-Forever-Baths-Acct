module.exports = (app) => {

    app.get("/", (req, res) => {
        if (req.session.user) {
            res.render("index");
        } else {
            res.redirect("/login")
        };
    });

    app.get("/todo", (req, res) => {
        if (req.session.user) {
            res.render("todo");
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