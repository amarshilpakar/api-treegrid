import {TreeGridController} from "./controllers/TreeGridController";

let express = require('express');
let router = express.Router();

router.get("/TreeGrid", (req, res) => {
    new TreeGridController().getList(req, res)
});

router.get("/saveData", (req, res) => {
    new TreeGridController().saveData(req, res)
});

router.get("/getData", (req, res) => {
    new TreeGridController().getFileData(req, res)
});

module.exports = router;
