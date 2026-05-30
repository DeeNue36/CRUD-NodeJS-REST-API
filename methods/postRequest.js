const cryptoUUID = require('crypto');
const bodyParser = require('../utils/bodyParser');

module.exports = async (req, res) => {
    if (req.url === '/api/movies') {
        try {
            let body = await bodyParser(req);
            
        } catch (err) {
            console.log(err);
        }
        
    }
};