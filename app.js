const http = require('http');
const port = 3330;

const handler = (require, response) => {
    console.log('new user!')
    response.end('Hello node')
};

const server = http.createServer(handler);

server.listen(port, () => {

    console.log('server is running..')
})