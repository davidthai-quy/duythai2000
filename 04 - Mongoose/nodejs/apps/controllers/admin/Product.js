const formidable = require('formidable')
const fs = require('fs')
const path = require('path')
const ProductModel = require("../../models/admin/product.model")
const CategoryModel = require("../../models/admin/category.model")

async function getList(req, res){

    if(req.query.page) {
        var page = parseInt(req.query.page)
    } else { page = 1 }

    const rowsPerPage = 5
    const perRow = (page - 1) * rowsPerPage

    const productAll = await ProductModel.find()
    const totalRows = productAll.length
    const totalPages = Math.ceil(totalRows/rowsPerPage)
    //console.log(totalPages)

    let pagePrev, pageNext
    if (page <= 1) {
        pagePrev = 1 } 
    else { pagePrev = page - 1 }
    if (page >= totalPages) {
        pageNext = totalPages } 
    else { pageNext = page + 1 };

    let products = await ProductModel.find().skip(perRow).limit(rowsPerPage).populate("categories")
    products = JSON.parse(JSON.stringify(products)) //vi dung du lieu dang JSON, con binh thuong ko can

    // console.log(products)

    // for (key in products) {
    //     console.log(products[key].prd_name)
    // }

    // for (key in products) {
    //     console.log(products[key].categories[0].cat_name) 
    // }

    res.render("admin/product", {data: {products: products, totalPages: totalPages, pagePrev:pagePrev, pageNext:pageNext}});
}
async function getAdd(req, res){

    var categories = await CategoryModel.find()
    categories = JSON.parse(JSON.stringify(categories))
    //console.log(categories)

    res.render("admin/add_product", {data: {categories:categories}});
}

function postAdd(req, res) {
    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        console.log(fields)
        // console.log(files.prd_image)
        //Upload
        var oldURL = files.prd_image.path
        var newURL = path.join(__dirname, "../../../public/images/products", files.prd_image.name)
        fs.rename(oldURL, newURL, (err) => {
            if (err) throw err
        })

        delete fields.sbm
        fields.prd_image = files.prd_image.name
        var addProduct = new ProductModel(fields)
        addProduct.save()
        res.redirect("/admin/product/list")
    })
}

async function getEdit(req, res){

    //get category
    var categories = await CategoryModel.find()
    categories = JSON.parse(JSON.stringify(categories))
    console.log(categories)

    const prd_id = req.params.prd_id //lay tu tren thanh search
    //console.log(prd_id)

    ProductModel.findOne({_id: prd_id}, (err, docs) => {
        res.render("admin/edit_product", {data:{product:docs, categories:categories}});
    })
}

function postEdit(req, res) { 
    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        const prd_id = req.params.prd_id

        //Upload
        if(!files.prd_image.name == "") {
            var oldURL = files.prd_image.path
            var newURL = path.join(__dirname, "../../../public/images/products", files.prd_image.name)
            fs.rename(oldURL, newURL, (err) => {
                if (err) throw err
            })
            fields.prd_image = files.prd_image.name
        }
        delete fields.sbm

        //Edit
        ProductModel.update({_id: prd_id}, fields).exec((err, docs) => {

        })
        res.redirect("/admin/product/list")
    })
}

function getDel(req, res){
    const prd_id = req.params.prd_id
    ProductModel.deleteOne({_id: prd_id}, (err, data) => {
        
    })
    res.redirect("/admin/product/list");
}
function getTest(req, res){
    //phan trang db.Collection.find().skip(tu dau).limit(bao nhieu)
    //gia su rowsPerPage = 3
    //perPage = (page - 1) * rowsPerPage
    //page = req.params.page_number ko co thi page = 1

    //let kp = req.params.abc lay tu router test
    //cach viet products?ten=NguyenYoMaMa&tuoi=22
    //let name = req.query.ten
    //let age = req.query.tuoi
    //console.log(kq)
    res.send(`
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="prd_image" />
        <input type="submit" name="sbm" value="Upload" />
    </form>
    `)
    res.end()

    //co 2 truy van loc san pham thi dung async await
}
function postTest(req, res){

    var form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        console.log(files)
        var oldURL = files.prd_image.path
        var newURL = path.join(__dirname, "../../../", files.prd_image.name)
        fs.rename(oldURL, newURL, (err) => {
            if(err) throw err
        })
        // console.log(fields)
    })
    // let mail = req.body.mail
    // res.send(mail)
}

module.exports = {
    getList:getList,
    getAdd:getAdd,
    postAdd:postAdd,
    getEdit:getEdit,
    postEdit:postEdit,
    getDel:getDel,


    getTest:getTest,
    postTest:postTest
}