function getList(req, res) {
    res.send("Product List");
}

function getAdd(req, res) {
    res.send("Product Add");
}

function getEdit(req, res) {
    res.send("Product Edit");
}

function getDel(req, res) {
    res.send("Product Del");
}

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel
}