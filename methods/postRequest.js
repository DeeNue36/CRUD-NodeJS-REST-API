const cryptoUUID = require('crypto');
const bodyParser = require('../utils/bodyParser');
const writeToFile = require('../utils/writeToFile');

module.exports = async (req, res) => {
    if (req.url === '/api/movies') {
        try {
            let body = await bodyParser(req);
            body.id = cryptoUUID.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end();
        } catch (err) {
            console.log(err);
            res.writeHead(400, {"Content-Type": "application/json"});
            res.end(JSON.stringify({"title": "Bad Request","message": "UUID Not Found!!"}));
        }
        
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({"title": "Not Found","message": "Route Not Found!!"}));
    }
};