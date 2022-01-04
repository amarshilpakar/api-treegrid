import { TreeGridController } from './controllers/TreeGridController';

var express = require('express');
const app = express();

var http = require('http');
var router = express.Router();
app.use("/", router);

var httpServer = http.createServer(app);
var port = process.env.PORT || 3000;
httpServer.listen(port, function () {
    console.log(`Listening at Port ${port} for HTTP`);
});

router.get("/TreeGrid", (req, res) => { new TreeGridController().GetList(req, res) });
