const express = require("express")
const session = require("express-session")
require("express-group-routes")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

require("./apps/kernal")(app, express, bodyParser, session)
require("./routes/web")(app)

// app.use("/", require("./routes/web"));

module.exports = app