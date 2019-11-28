function getLogin(req, res){
    
    res.render("admin/login", {data:{}});
}
function postLogin(req, res){
    
    let mail = req.body.mail
    let pass = req.body.pass 

    if(mail == "vietpro.edu.vn@gmail.com" && pass == "123456"){
        res.redirect("/admin/dashboard")
    }
    else{

        let error = "Tài khoản không hợp lệ !"
        res.render("admin/login", {data:{error:error}});
    }
}
function getLogout(req, res){
    res.send("logout");
}
function getDashboard(req, res){
    res.render("admin/dashboard");
}

module.exports = {
    getLogin:getLogin,
    postLogin:postLogin,
    getLogout:getLogout,
    getDashboard:getDashboard
}