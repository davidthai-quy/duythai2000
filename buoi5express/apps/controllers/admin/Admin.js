function getLogin(req, res) {
    res.render("admin/login", {data:{}})
}

function postLogin(req, res) {
    let mail = req.body.mail
    let pass = req.body.pass
    if (mail == "vietpro.edu.vn@gmail.com" && pass == "123456") {
        //dashboard. chuyen sang router khac
        res.redirect("/admin/dashboard")
    } else {
        //login + fail. goi view vao
        let error = "Tài khoản không hợp lệ !"
        res.render("admin/login", {data:{error:error}})
    }
}

function getLogout(req, res) {
    res.send("Logout")
}

function getDashboard(req, res) {
    // let a = 5
    // let b = 10
    // let c = a + b
    res.render("admin/dashboard") //,{kq:{kq2:c}} object kq chua 1 object kq2 co gia tri c)
}

module.exports = {
    getLogin:getLogin,
    getLogout:getLogout,
    getDashboard:getDashboard,

    postLogin:postLogin
}