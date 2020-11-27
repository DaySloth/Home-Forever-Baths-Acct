module.exports = (app) => {
    app.post('/user/login', (req, res) => {
        console.log(req.body);
    });

    
}