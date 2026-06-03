const writeToFile = require('../utils/writeToFile');

module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
    let id = req.url.split('/')[3];
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    if (!regexV4.test(id)) {
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({"title": "Bad Request","message": "UUID Not Found!!"}));
    } 
    else if (baseUrl === '/api/movies/' && regexV4.test(id)) {
        const movieIndex = req.movies.findIndex((movie) => {
            return movie.id === id;
        });
        if (movieIndex === -1) {
            res.statusCode = 404;
            res.write(JSON.stringify({"title": "Not Found","message": "Movie Not Found!!"}));
            res.end();
        } else {
            req.movies.splice(movieIndex, 1);
            writeToFile(req.movies);
            res.writeHead(204, {"Content-Type": "application/json"});
            res.end(JSON.stringify(req.movies));
            // OR res.end();
        }
    }
};