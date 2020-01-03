//  Gọi tới file kết nối, đồng thời tạo đối tượng Mongoose
const mongoose = require("../../../common/database")()
//  Mô tả một Model User thông qua đối tượng Schema
const schemaUser = new mongoose.Schema({
    //  _id là kiểu dữ liệu đặc biệt, phải được lấy ra từ đối tượng mongoose
    //_id:mongoose.Schema.ObjectId,
    user_full: String,
    user_mail: String,
    user_pass: String,
    user_level: Number
})
//  Khởi tạo Model từ một cấu trúc Schema có trước
const UserModel = mongoose.model("User", schemaUser, "User")

//  Sử dụng Model thông qua phương thức find (lọc dữ liệu)
// UserModel.find((err, docs)=>{

//     console.log(err)
//     console.log(docs)
// })

//  Sử dụng Model thông qua phương thức (thêm dữ liệu)
// UserInsert = new UserModel({
// 	user_full: "Nguyễn Văn A",
//     user_mail: "nguyenvana@gmail.com",
//     user_pass: "123456",
//     user_level: 3
// }, {versionKey: false})
// UserInsert.save()

//  Sử dụng Model thông qua phương thức (sửa dữ liệu)
// UserModel.updateOne({_id: "5ddd1b07dc308516847757dd"}, {user_pass: "888888"}).exec((err, docs)=>{
//     console.log(err)
//     console.log(docs)
// })

//  Sử dụng Model thông qua phương thức (xóa dữ liệu)
// UserModel.deleteOne({_id: "5ddd1b07dc308516847757dd"}, (err, data)=>{

//     console.log(err)
//     console.log(data)
// })

module.exports = UserModel