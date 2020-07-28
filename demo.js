const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  
  const fs = require("fs");
  
  let text = fs.readFileSync("backj.txt","utf-8");
  text = text.replace("hi","bye");
  res.end(text);
  res.end("hi");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
