const CategoryModel = require("../../models/admin/category.model")

module.exports = async (req, res, next) => {
    const category = await CategoryModel.find().sort({_id: 1})
    global.category = category //bien dang global
    next() //thuc thi o controller
}