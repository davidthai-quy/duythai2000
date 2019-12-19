const CategoryModel = require("../../models/admin/category.model")

async function getList(req, res){
    let category = await CategoryModel.find()
    category = JSON.parse(JSON.stringify(category))
    res.render("admin/category", {data: {category: category}});
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