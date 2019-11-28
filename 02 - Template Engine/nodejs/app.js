const express = require("express")
const app = express()
const bodyParser = require("body-parser")

require("./apps/kernal")(express, app, bodyParser)

app.use("/", require("./routes/web.js"))


module.exports = app