const CategoryModel = require("../../models/admin/category.model")
const ProductModel = require("../../models/admin/product.model")
const CommentModel = require("../../models/admin/comment.model")
const moment = require("moment")

async function home(req, res) {
    //Featured Product
    let featuredProduct = await ProductModel.find({prd_featured: 1}).limit(6)

    //Get Latest Product
    let latestProduct = await ProductModel.find().sort({_id: -1}).limit(6)

    res.render("site/index", {data: {featuredProduct:featuredProduct, latestProduct:latestProduct, i:0}})
}

async function category(req, res) {
    const cat_id = req.params._id
    const _id = req.params._id
    let categoryName = await CategoryModel.find({_id})
    // console.log(categoryName)
    let productList = await ProductModel.find({cat_id})
    let total = productList.length
    res.render("site/category", {data: {productList:productList, total:total, categoryName:categoryName}})
}

async function product(req, res) {
    const prdId = req.params.prd_id
    //Show products
    const product = await ProductModel.findOne({_id: prdId})
    //Show comment
    let comments = await CommentModel.find({prd_id: prdId})
    for(key in comments) {
        comments[key].toObject.comm_date = moment(comments[key].comm_date).format("YYYY-MM-DD HH:mm:ss")
        console.log(comments[key].toObject.comm_date) // muon sua date phia chuyen sang toObject
    }
    res.render("site/product", {data:{product:product, comments:comments}})
}
async function search(req, res) {
    let keyWord = req.body.keyword
    let newKeyWord = ".*" + keyWord.replace(" ", ".*") + ".*"
    let products = await ProductModel.find( { prd_name: { $regex: newKeyWord, $options: 'i' } } )
    // console.log(products)
    res.render("site/search", {data:{products:products, keyWord:keyWord, i:0}})
}

async function comment(req, res) {
    let commentAdd = new CommentModel({
        prd_id: req.params.prd_id,
        comm_name: req.body.comm_name,
        comm_mail: req.body.comm_mail,
        comm_date: moment().format("YYYY-MM-DD HH:mm:ss"),
        comm_details: req.body.comm_details
    })

    commentAdd.save()
    res.redirect( "/product/"+ req.params.prd_id )
}

function cart(req, res) {
    res.render("site/cart")
}
function success(req, res) {
    res.render("site/success")
}

module.exports = {
    home:home,
    category:category,
    product:product,
    search:search,
    comment,comment,
    cart:cart,
    success:success
}