const CategoryModel = require("../../models/admin/category.model")
const ProductModel = require("../../models/admin/product.model")

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
    const prd_id = req.params.prd_id
    const product = await ProductModel.findOne({_id: prd_id})
    res.render("site/product", {data:{product:product}})
}
function search(req, res) {
    res.render("site/search")
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
    cart:cart,
    success:success
}