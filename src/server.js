console.log("Hello World!");

const _ = require("underscore");
const http = require("http");
const fs = require("fs");

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
    if(request.url === "/favicon.ico"){
        console.log("favicon request");
    }

    console.log(request.url);

    response.writeHead(200, {"Content-Type": "text/html"});

    response.write(index);

    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running at 127.0.0.1:${port}`);
});