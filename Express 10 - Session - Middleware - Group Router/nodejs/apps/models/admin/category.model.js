const mongoose = require("../../../common/database")()

const schemaCategory = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    cat_name: String
})

const CategoryModel = mongoose.model("Category", schemaCategory, "Category")

module.exports = CategoryModel