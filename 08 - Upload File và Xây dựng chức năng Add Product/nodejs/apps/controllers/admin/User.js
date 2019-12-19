function getList(req, res){
    res.send("User List");
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