const HTTP = require("http");
const FS = require("fs");

const PORT = 8080;

const SERVER = HTTP.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    FS.readFile("../index.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    FS.readFile("../pages/about.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/contact") {
    FS.readFile("../pages/contact.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/stylesheet/info-site.css") {
    FS.readFile("../stylesheet/info-site.css", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(data);
        res.end();
      }
    });
  } else {
    FS.readFile("../pages/404.html", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});


SERVER.listen(PORT, (err) => {
  if (err) {
    console.log(`Something's wrong: ${err}`);
  } else {
    console.log(`Server is live at: ${PORT}`);
  }
});
