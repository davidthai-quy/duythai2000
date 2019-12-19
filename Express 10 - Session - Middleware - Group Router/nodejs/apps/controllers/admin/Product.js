const CategoryModel = require("../../models/admin/category.model")
const ProductModel = require("../../models/admin/product.model")
var formidable = require("formidable")
var fs = require("fs")
var path = require("path")

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

    let categories = await CategoryModel.find()
    categories = JSON.parse(JSON.stringify(categories))

    // console.log(categories)

    res.render("admin/add_product", { data: { categories: categories } });
}
function postAdd(req, res) {

    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        
        //   Upload File
        var oldPath = files.prd_image.path
        var newPath = files.prd_image.name
        newPath = path.join(__dirname,"../../../public/images/products/", newPath)
        fs.rename(oldPath, newPath, (err) => {
            if(err) throw err
        })

        //  Customize Obj files
        fields.prd_image = files.prd_image.name
        delete fields.sbm
        //  Add product
        var productInsert = new ProductModel(fields, { versionKey: false })
        productInsert.save()

        res.redirect("/admin/product/list")
    })
}

async function getEdit(req, res) {
    
    //  GET Categories
    let categories = await CategoryModel.find()
    categories = JSON.parse(JSON.stringify(categories))

    //  GET Product
    const prd_id = req.params.prd_id
    let product = await ProductModel.find({_id: prd_id})
    product = JSON.parse(JSON.stringify(product))

    res.render("admin/edit_product", {data:{categories:categories, product:product[0]}});
}
function postEdit(req, res){

    var prd_id = req.params.prd_id
    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        
        //   Upload File
        if(files.prd_image.name){
            var oldPath = files.prd_image.path
            var newPath = files.prd_image.name
            newPath = path.join(__dirname,"../../../public/images/products/", newPath)
            fs.rename(oldPath, newPath, (err) => {
                if(err) throw err
            })
            fields.prd_image = files.prd_image.name
        }
 
        delete fields.sbm
        //  Edit product
        ProductModel.updateOne({_id: prd_id}, fields).exec((err, docs)=>{

            res.redirect("/admin/product/list")
        })
    })

}

function getDel(req, res) {
    
    const prd_id = req.params.prd_id
    ProductModel.deleteOne({_id: prd_id}, (err, docs)=>{

        res.redirect("/admin/product/list")
    })
}
function getTest(req, res) {

    let name = req.query.ten
    let age = req.query.tuoi
    let address = req.query.noisong
    console.log(name + age + address)
}
function postTest(req, res) {

    let mail = req.body.mail
    res.send(mail)
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