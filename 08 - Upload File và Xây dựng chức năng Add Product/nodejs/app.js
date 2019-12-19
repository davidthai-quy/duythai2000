const express  = require("express")
const app = express()
const router = express.Router()
const bodyParser = require("body-parser")

require("./apps/kernal")(app, express, bodyParser)

app.use("/", require("./routes/web"));

module.exports = app