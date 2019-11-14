function getList(req, res) {
    res.render("admin/product")
}

function getAdd(req, res) {
    res.render("admin/add_product");
}

function getEdit(req, res) {
    res.render("admin/edit_product");
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