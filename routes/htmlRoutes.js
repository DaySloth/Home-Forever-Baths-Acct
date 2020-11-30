module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.render("index");
    });

    app.get("/todo", (req, res)=>{
        res.render("todo")
    });

    app.get("/history", (req, res)=>{
        res.render("history")
    });

    app.get("/login", (req, res)=>{
        res.render("login");
    });

    app.get("/logout", (req, res)=>{
        
    });
}