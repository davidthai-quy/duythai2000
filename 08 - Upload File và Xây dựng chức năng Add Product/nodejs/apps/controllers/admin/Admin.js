const UserModel = require("../../models/admin/user.model")

function getLogin(req, res){
    res.render("admin/login", {data:{}});
}
function postLogin(req, res){

    const mail = req.body.mail
    const pass = req.body.pass

    UserModel.find({user_mail:mail, user_pass:pass}, (err, docs)=>{
        
        if(docs.length > 0){
            res.redirect("/admin/dashboard")
        }
        else{
            let error = "Tài khoản không hợp lệ !"
            res.render("admin/login", {data:{error:error}})
        }
    }) 
}
function getLogout(req, res){
    res.send("Logout");
}
function getDashboard(req, res){
      
    res.render("admin/dashboard")
}

module.exports = {
    getLogin:getLogin,
    postLogin:postLogin,
    getLogout:getLogout,
    getDashboard:getDashboard
}