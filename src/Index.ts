let express = require('express');
const app = express();

let http = require('http');
let router = require('./routes');
app.use("/", router);

let httpServer = http.createServer(app);
let port = process.env.PORT || 3000;
httpServer.listen(port, function () {
    console.log(`Listening at Port ${port} for HTTP`);
});
