const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello from Server!\n");

});

const createFile = fs.writeFileSync('message.txt', 'Hello from Node.js');
const updateFile = fs.appendFileSync('message.txt', '\nAppended text from Node.js');
const readFile = fs.readFileSync('message.txt', 'utf-8');
console.log(readFile);

fs.existsSync('message.txt') ? console.log('File exists') : console.log('File does not exist');


if(fs.existsSync('message.txt')){
  fs.unlinkSync('message.txt');
  console.log('File deleted successfully');
}
server.listen(port, ()=>{
console.log('The server is listening on port: https://localhost', port);
});


