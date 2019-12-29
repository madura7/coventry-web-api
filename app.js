let logger = require("./log"); //IMPORTING LOCAL MODULE
let http = require('http'); //IMPORT CORE MODULE
let uppercase = require('upper-case');// IMPORTING FROM 3RD PARTY

let path = require('path');
const PATHVALUE = "";
console.log(path.extname(PATHVALUE));

var server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.write('Hello World!');
        res.end();
    } 
    else if(req.url == '/animals'){
        res.write('animals!');
        res.end();
    } 
    else if(req.url == '/api/students'){
        res.write(JSON.stringify(['Kemila', 'Nisal']));
        res.end();
    } 
    else{
        var inlovercase = 'word';
        res.write(uppercase.upperCase(inlovercase));
        res.end();
    }    
});

server.listen(5000);
console.log("Listening on port 5000");
server.on('connection', function(socket){
    console.log('Connected...');
});

logger.logInfoMessage("Application is starting up!");

