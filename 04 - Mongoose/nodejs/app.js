const express  = require("express")
require("express-group-routes") //required truoc khi khoi tao doi tuong app
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")
const session = require("express-session")

require("./apps/kernal")(app, express, bodyParser, session)
require("./routes/web")(app)

// app.use("/", require("./routes/web"));

module.exports = app