function getLogin(req, res) {
    res.send("Login");
}

function getLogout(req, res) {
    res.send("Logout");
}

function getDashoard(req, res) {
    res.send("Dashboard");
}

module.exports = {
    getLogin:getLogin,
    getLogout:getLogout,
    getDashoard:getDashoard
}