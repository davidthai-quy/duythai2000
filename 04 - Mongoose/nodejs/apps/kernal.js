module.exports = (app, express, bodyParser, session)=>{
    //  Config EJS
    app.set('views', __dirname+"/views");
    app.set('view engine', 'ejs');

    //  Config Static Folder
    app.use("/static", express.static(__dirname+"/../public"));

    //  Config Body Parser
    app.use(bodyParser.urlencoded({ extended: true }))

    // Config Session 
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } //https true; http false
    }))
}