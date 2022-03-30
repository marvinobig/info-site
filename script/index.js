const HTTP = require("http");
const FS = require("fs");
const PORT = process.env.PORT || 3000;

const SERVER = HTTP.createServer((req, res) => {});

SERVER.listen((err) => {
  if (err) {
    console.log(`Something's wrong: ${err}`);
  } else {
    console.log(`Server is live at: ${PORT}`);
  }
});
