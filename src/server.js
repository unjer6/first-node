console.log("Hello World!");

const http = require("http");

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === "/favicon.ico"){
        console.log("favicon request");
    }

    response.writeHead(200, {"Content-Type": "text/plain"});

    console.log("request received");

    response.write("Hello World!");

    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running at 127.0.0.1:${port}`);
});