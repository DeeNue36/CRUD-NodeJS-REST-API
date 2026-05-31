const cryptoUUID = require('crypto');
const bodyParser = require('../utils/bodyParser');

module.exports = async (req, res) => {
    if (req.url === '/api/movies') {
        try {
            let body = await bodyParser(req);
            body.id = cryptoUUID.randomUUID();
            req.movies.push(body);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end();
        } catch (err) {
            console.log(err);
            res.writeHead(400, {"Content-Type": "application/json"});
            res.end(JSON.stringify({"title": "Bad Request","message": "UUID Not Found!!"}));
        }
        
    }
};