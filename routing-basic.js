const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathname === "/product") {
    res.end("This is the PRODUCT");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
