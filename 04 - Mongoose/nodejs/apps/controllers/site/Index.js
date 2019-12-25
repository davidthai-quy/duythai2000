const CategoryModel = require("../../models/admin/category.model")
const ProductModel = require("../../models/admin/product.model")

async function home(req, res) {
    //Featured Product
    let featuredProduct = await ProductModel.find({prd_featured: 1}).limit(6)

    //Get Latest Product
    let latestProduct = await ProductModel.find().sort({_id: -1}).limit(6)

    res.render("site/index", {data: {featuredProduct:featuredProduct, latestProduct:latestProduct, i:0}})
}

function category(req, res) {
    res.render("site/category")
}
function product(req, res) {
    res.render("site/product")
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