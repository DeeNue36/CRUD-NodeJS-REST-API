const http = require('http');
const getReq = require('./methods/getRequest');
const postReq = require('./methods/postRequest');
const putReq = require('./methods/putRequest');
const deleteReq = require('./methods/getRequest');
// const { getReq, postReq, putReq, deleteReq } = require('./methods');

let movies = require('./data/movies.json');

// require('dotenv').config();

const port = process.env.PORT || 8001;

const server = http.createServer((req, res) => {
    req.movies = movies;
    
    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default: 
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({title: "Not Found", message: "Route Not Found!!"}));
            res.end();
    }

});

server.listen(port, () => { 
    console.log(`Server is running on port: ${port}`)
});