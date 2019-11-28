function getList(req, res){
    res.send("Category List");
}
function getAdd(req, res){
    res.send("Category Add");
}
function getEdit(req, res){
    res.send("Category Edit");
}
function getDel(req, res){
    res.send("Category Del");
}

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel
}