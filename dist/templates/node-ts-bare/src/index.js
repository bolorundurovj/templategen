"use strict";
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(res, req);
    //handle incomming requests here...
});
server.listen(5000);
console.log('Node TS web server at port 5000 is running...');
//# sourceMappingURL=index.js.map