import express from 'express'
const logger = require('morgan')
const bodyParser = require('body-parser')
import { connectDB } from './database/connection';

const app = express();

//Setting the hostname and port number for the server to listen
const hostname = "127.0.0.1";
const port = 3000;

// database setup
connectDB();

app.use(bodyParser.json());
app.use(logger('dev'))
app.use(express.json())

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
