"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger = require('morgan');
const bodyParser = require('body-parser');
const connection_1 = require("./connection");
const app = (0, express_1.default)();
//Setting the hostname and port number for the server to listen
const hostname = "127.0.0.1";
const port = 3000;
// database setup
(0, connection_1.connectDB)();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 1000000
}));
//Routes
app.get('/', (req, res) => {
    res.send('Node.js API Server!');
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
