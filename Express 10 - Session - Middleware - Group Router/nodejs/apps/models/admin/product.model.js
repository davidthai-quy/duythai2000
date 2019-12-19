const mongoose = require("../../../common/database")()

const schemaProduct = new mongoose.Schema({

    cat_id : mongoose.Schema.Types.ObjectId,
    prd_name : String,
    prd_image : String,
    prd_price : Number,
    prd_warranty : String,
    prd_accessories : String,
    prd_new : String,
    prd_promotion : String,
    prd_status : Number,
    prd_featured : Number,
    prd_details : String
}, { toJSON: { virtuals: true } })

schemaProduct.virtual("categories", {

    ref: "Category",
    localField: "cat_id",
    foreignField: "_id"
})

const ProductModel = mongoose.model("Product", schemaProduct, "Product")
module.exports = ProductModel