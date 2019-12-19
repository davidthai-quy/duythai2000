const UserModel = require("../../models/admin/user.model")

async function getList(req, res){
    let user = await UserModel.find()
    user = JSON.parse(JSON.stringify(user))
    res.render("admin/user", {data: {user: user}});
}

function getAdd(req, res){
    res.send("User Add");
}
function getEdit(req, res){
    res.send("User Edit");
}
function getDel(req, res){
    res.send("User Del");
}

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel
}