const mongoose = require("../../../common/database")()
const schemaCategory = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    },
    cat_name: String
})

const CategoryModel = mongoose.model("Category", schemaCategory, "Category")

//  Sử dụng Model thông qua phương thức find (lọc dữ liệu)
// CategoryModel.find((err, docs)=>{
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

module.exports = CategoryModel