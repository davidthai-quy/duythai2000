const socket = require('socket.io')
const express = require('express')
//const app = require('express')() //goi ra roi dung luon
const app = require('express') ()
const PORT = 3000;
// fs, path, http, http2, -> file system, path, duong link

//app.use(express.static('public'))


app.get('/chat', (req, res) => {
    //req tu client len, res tu server ve;
    res.sendFile(__dirname + '/public/index.html')
})



//ve hoc serve static trong express

//khi o duong dan no chi co the GET.
const server = require('http').createServer(app); //chuyen ket noi http
//co 2 server chay 1 link -> dinh ca 2 server vao
const io = require('socket.io')(server)
//socket la dai dien 1 client
//io la dai dien cho ca server socket. lam viec theo on emit. Chi nghe / bat su kien nhu Js
//http dai dien cho server app.

//let sockets = [];
//han che chat tong. 1 ng chat 1000 nhan lag.
let counter = 0;

//server ngon ram.
//moi client phai co 1 id
io.on('connection', (socket) => {

    counter++
    io.emit("CHAT_INFO", {clients: counter})

    socket.on("disconnect", () => {
        counter--
        io.emit("CHAT_INFO", {clients: counter})
    })

    socket.on("MESSAGE", (data) => {
        console.log("User sent a message", data)
        //socket.emit("MESSAGE", "oke")
        io.sockets.emit("MESSAGE", data) //la 1 mang cac cai dang onl
    }) 
    //chung ten su kien vs client ms nghe dc
    //can phan biet log cua server hay client
    //on chi chay neu co emit.


    //socket.emit("MESSAGE", "Data from server")

    console.log("User connect", socket.id)
})


server.listen(PORT, () => {console.log(`Server listen on port ${PORT}`)}) //literal //${PORT}