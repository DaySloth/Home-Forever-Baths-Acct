const router = require("express").Router();
const auth = require("../../auth/auth.js");


router.post("/user/login", (req, res) => {
    auth.login(req.body)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)});
});

router.post("/user/register", (req, res)=>{
    auth.register(req.body)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)});
})

module.exports = router;
