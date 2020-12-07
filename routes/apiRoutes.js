const installDb = require('../models/install.js');

module.exports = (app) => {
    app.post('/api/install', (req, res) => {
        console.log(req.body);
        installDb.create(req.body)
        .then(data=>{
            console.log(data);
        })
        .catch(error=>{
            console.log(error);
        });
    });
}