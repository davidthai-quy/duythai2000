const express = require('express') //goi module bang required
const app = express()
//tao ra app express bang 2 dong tren.

const router = express.Router()
//GET chay lien ket 
//POST chay lien ket trong form
app.use("/", require("./routes/web"))
//goi de them router vao VD: /abc o app.use roi web ghi /def thi phai web/abc/def ms vao dc

module.exports = app