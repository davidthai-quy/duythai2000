//METHOD & ROUTER (endpoint)
//request & response

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/hello", function(req, res) {
    console.log("Have user request")
    res.send("Hello World!")
    //res.sendFile(__dirname + "/Documant.rtf")
    //res.render
    //res.json({})

})

//Param & Query
app.get("/hello/:name", function (req, res) {
    console.log(req.params)
    var name = req.params.name
    res.send("Hello " + name)
})

//calculator/1/1 => 1 + 1 = 2
app.get("/calculator/:a/:b", (req, res) => {
    var num1 = req.params.a | 0
    var num2 = req.params.b | 0
        //var num1 = req.params.a | 0 / ep sang theo toan tu bit co chuc nang floor
        //let { num1, num2 } = req.params //destructoring
    var result = parseInt(num1) + parseInt(num2)
    res.send("Result: " + result) //phai tra ra ket qua la string
    //ten phuong thuc the hien chuc nang
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))