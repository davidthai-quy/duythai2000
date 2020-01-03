const CategoryModel = require("../../models/admin/category.model")

module.exports = async (req, res, next)=>{

    global.category = await CategoryModel.find().sort({_id: 1})
    next()
}