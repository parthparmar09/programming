const http = require("http");

const server = http.createServer((req, res) => {
  const path = req.url;
  switch (path) {
    case "/":
      res.end("Home");
      break;
    case "/home":
      res.end("Home");
      break;
    case "/about":
      res.end("About");
      break;

    case "/contact":
      res.end("Contact");
      break;

    default:
      res.writeHead(404, "Page Not Found", {'myHeader' : 'Custom Header'});
      res.end("Error: 404 , Page Not Found");
      break;

  }
});

server.listen(5000, "localhost", () => {
  console.log("Server is running...");
});
