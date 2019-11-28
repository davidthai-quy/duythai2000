module.exports = (app, express, bodyParser) => {
    //config cua EJS
    app.set('views', __dirname + "/views")
    app.set('view engine', 'ejs')

    //config static folder
    app.use("/static", express.static(__dirname + "/../public"))

    //config body-parser
    app.use(bodyParser.urlencoded({ extended: true }))
}