const express = require('express') //goi module bang required
const app = express()
//tao ra app express bang 2 dong tren.

const router = express.Router()
//GET chay lien ket 
//POST chay lien ket trong form
const bodyParser = require("body-parser")

//config cua EJS
app.set('views', __dirname + "/apps/views")
app.set('view engine', 'ejs')

//config static folder
app.use("/static", express.static(__dirname + "/public"))

//config body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", require("./routes/web"))
//goi de them router vao VD: /abc o app.use roi web ghi /def thi phai web/abc/def ms vao dc

module.exports = app