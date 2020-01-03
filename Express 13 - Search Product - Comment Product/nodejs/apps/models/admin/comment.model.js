const mongoose = require("../../../common/database")()

const schemaComment = new mongoose.Schema({

    prd_id: mongoose.Schema.Types.ObjectId,
    comm_name: String,
    comm_mail: String,
    comm_date: Date,
    comm_details: String 
}, { toJSON: { virtuals: true } })

schemaComment.virtual("products", {

    ref: "Product",
    localField: "prd_id",
    foreignField: "_id"
})

const CommentModel = mongoose.model("Comment", schemaComment, "Comment")
module.exports = CommentModel