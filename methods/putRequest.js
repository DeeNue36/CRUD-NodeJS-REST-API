const bodyParser = require('../utils/bodyParser');
const writeToFile = require('../utils/writeToFile');

module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
    let id = req.url.split('/')[3];
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    if (!regexV4.test(id)) {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({"title": "Bad Request","message": "UUID Not Found!!"}));
    }
};