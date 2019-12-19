const express  = require("express")
require("express-group-routes")
const bodyParser = require("body-parser")
const session = require("express-session")
const app = express()
// const router = express.Router()


require('./apps/kernal')(app, express, bodyParser, session);

//app.use('/', require('./routes/web'));
require('./routes/web')(app);


module.exports = app;