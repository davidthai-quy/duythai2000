// Gọi tới file kết nối, đồng thời tạo đối tượng Mongoose
const mongoose = require("../../../common/database")() //() de thuc thi ham trong () => { }
// Mô tả một Model User thông qua đối tượng Schema
const schemaUser = new mongoose.Schema({
    //_id là kiểu dữ liệu đặc biệt, phải được lấy ra từ mongoose
    _id: mongoose.Schema.ObjectId,
    user_full: String,
    user_mail: String,
    user_pass: String,
    user_level: Number
})
// Khởi tạo model từ một cấu trúc Schema có trước
const UserModel = mongoose.model("User", schemaUser, "User")
//Sử dụng Model qua phương thức find (lọc dữ liệu)
UserModel.find((err, docs) => {
    console.log(docs)
})