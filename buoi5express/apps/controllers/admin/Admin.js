function getLogin(req, res) {
    res.render("admin/login")
}

function getLogout(req, res) {
    res.send("Logout")
}

function getDashoard(req, res) {
    // let a = 5
    // let b = 10
    // let c = a + b
    res.render("admin/dashboard") //,{kq:{kq2:c}} object kq chua 1 object kq2 co gia tri c)
}

module.exports = {
    getLogin:getLogin,
    getLogout:getLogout,
    getDashoard:getDashoard
}