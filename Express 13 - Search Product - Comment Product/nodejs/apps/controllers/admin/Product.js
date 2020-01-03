const formidable = require("formidable")
const fs = require("fs")
const path = require("path")
const moment = require("moment")

const CategoryModel = require("../../models/admin/category.model")
const ProductModel = require("../../models/admin/product.model")
const CommentModel = require("../../models/admin/comment.model")

async function getList(req, res) {

    if (req.query.page) {
        var page = parseInt(req.query.page)
    }
    else {
        var page = 1
    }
    var rowsPerPage = 5
    var perRow = page * rowsPerPage - rowsPerPage

    var productAll = await ProductModel.find()
    var totalRows = productAll.length
    var totalPages = Math.ceil(totalRows / rowsPerPage)

    var pagePrev, pageNext
    if (page - 1 <= 0) {
        pagePrev = 1
    }
    else {
        pagePrev = page - 1
    }
    //
    if (page + 1 >= totalPages) {
        pageNext = totalPages
    }
    else {
        pageNext = page + 1
    }

    //console.log(totalPages)


    var products = await ProductModel.find().sort({ _id: -1 }).skip(perRow).limit(rowsPerPage).populate("categories")
    products = JSON.parse(JSON.stringify(products))
    res.render("admin/product", { data: { products: products, totalPages: totalPages, pagePrev: pagePrev, pageNext: pageNext } });



    // for(key in products){

    //     console.log(products[key].prd_name)
    // }

    // for(key in products){

    //     console.log(products[key].categories[0].cat_name)
    // }



    // console.log(products) 



}

async function getAdd(req, res) {

    var categories = await CategoryModel.find()
    categories = JSON.parse(JSON.stringify(categories))
    // console.log(categories)

    res.render("admin/add_product", { data: { categories: categories } });
}
function postAdd(req, res) {

    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {

        // Upload
        var oldUrl = files.prd_image.path
        var newUrl = path.join(__dirname, "../../../public/images/products", files.prd_image.name)
        fs.rename(oldUrl, newUrl, (err) => {

            if (err) throw err
        })

        // Add Product
        delete fields.sbm
        fields.prd_image = files.prd_image.name
        // console.log(fields)
        var addProduct = new ProductModel(fields)
        addProduct.save()
        res.redirect("/admin/product/list")
    })
}

async function getEdit(req, res) {

    //  Get Category
    var categories = await CategoryModel.find()
    categories = JSON.parse(JSON.stringify(categories))

    //
    const prd_id = req.params.prd_id
    ProductModel.findOne({ _id: prd_id }, (err, docs) => {

        res.render("admin/edit_product", { data: { product: docs, categories: categories } })
    })
}

function postEdit(req, res) {

    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {

        const prd_id = req.params.prd_id
        console.log(files.prd_image.name)
        //  Upload File
        if (!files.prd_image.name == "") {

            var oldUrl = files.prd_image.path
            var newUrl = path.join(__dirname, "../../../public/images/products", files.prd_image.name)
            fs.rename(oldUrl, newUrl, (err) => {
                if (err) throw err
            })
            fields.prd_image = files.prd_image.name
        }
        delete fields.sbm

        //  Edit
        ProductModel.updateOne({ _id: prd_id }, fields).exec((err, docs) => {

        })
        res.redirect("/admin/product/list")
    })
}

function getDel(req, res) {

    const prd_id = req.params.prd_id
    ProductModel.deleteOne({ _id: prd_id }, (err, data) => {

    })

    res.redirect("/admin/product/list")
}

async function getTest(req, res) {

    const date = new Date()

    const fullYear = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const hours = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    var addComment = new CommentModel({
        prd_id: "5db80537a9da0856c7a4c63f",
        comm_name: "Nguyễn Văn A",
        comm_mail: "nguyenvana@gmail.com",
        comm_date: fullYear + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second,
        comm_details: "Đây thực sự là một sản phẩm tuyệt vời"
    })
    addComment.save()

    let comments = await CommentModel.find()
    // let dateTime = moment(comments.comm_date).format("YYYY-MM-DD hh:mm:ss")
    let dateTime = moment().format("YYYY-MM-DD hh:mm:ss")
    console.log(dateTime)
}
function postTest(req, res) {

    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {

        var oldUrl = files.prd_image.path
        var newUrl = path.join(__dirname, "../../../", files.prd_image.name)
        fs.rename(oldUrl, newUrl, (err) => {
            if (err) throw err
        })
        // console.log(newUrl)
        // console.log(fields)
        // console.log(files.prd_image.name)
    })
}



module.exports = {
    getList: getList,
    getAdd: getAdd,
    postAdd: postAdd,
    getEdit: getEdit,
    postEdit: postEdit,
    getDel: getDel,


    getTest: getTest,
    postTest: postTest
}