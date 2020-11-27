module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.render("index");
    });

    app.get("/todo", (req, res)=>{
        
    });

    app.get("/history", (req, res)=>{
        
    });

    app.get("/login", (req, res)=>{
        res.render("login");
    });

    app.get("/logout", (req, res)=>{
        
    });
}