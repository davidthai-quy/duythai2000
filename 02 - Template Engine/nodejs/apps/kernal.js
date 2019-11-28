module.exports = (express, app, bodyParser)=>{

    //  Config EJS
    app.set("views", __dirname+"/views")
    app.set("view engine", "ejs")
    //  Config Static Folder
    app.use("/static", express.static(__dirname+"/../public"))
    //  Config Body Parser
    app.use(bodyParser.urlencoded({ extended: true }))
}

