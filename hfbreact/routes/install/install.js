const router = require("express").Router();
const db = require("../../models");

router.get("/api/install/outstanding", (req, res)=>{
    db.Install.find({payment_status: "Outstanding"}, (err, data) => {
        res.send(data);
    });
});

router.get("/api/install", (req, res)=>{
    db.Install.find({}, (err, data) => {
        res.send(data);
    });
});

router.post("/api/install", (req, res)=>{

});

router.put("/api/install/:id", (req, res)=>{

});

router.delete("/api/install/:id", (req, res)=>{

});

module.exports = router;
