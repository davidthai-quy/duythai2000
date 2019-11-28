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
}, {toJSON: {virtuals: true} })

schemaProduct.virtual("category", {
    ref: "Category",
    localField: "cat_id",
    foreignField: "_id"
})
const ProductModel = mongoose.model("Product", schemaProduct, "Product")

// ProductModel.find({}, (err, docs) => {
//     console.log(err)
//     console.log(docs)
// })

//  Sử dụng Model thông qua phương thức (thêm dữ liệu)
// CategoryInsert = new CategoryModel({
//     cat_name: "Things"
// }, {versionKey: false})
// CategoryInsert.save()

//  Sử dụng Model thông qua phương thức (sửa dữ liệu)
// CategoryModel.updateOne({_id: "5db660e0a9dc75c99d11ad1d"}.exec((err, docs)=>{
//     console.log(err)
//     console.log(docs)
// })

//  Sử dụng Model thông qua phương thức (xóa dữ liệu)
// CategoryModel.deleteOne({_id: "5ddd1b09ed83140938f5648b"}, (err, data)=>{
//     console.log(err)
//     console.log(data)
// })

module.exports = ProductModel