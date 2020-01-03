const CategoryModel = require("../../models/admin/category.model")
const ProductModel = require("../../models/admin/product.model")
const CommentModel = require("../../models/admin/comment.model")
const moment = require("moment")

async function home(req, res){

    //  Get Featured Product
    let featuredProduct = await ProductModel.find({prd_featured: 1}).limit(6)

    //  Get Latest Product
    let latestProduct = await ProductModel.find().sort({_id: -1}).limit(6)
    
    res.render("site/index", {data:{featuredProduct:featuredProduct, latestProduct:latestProduct, i:0, j:0}})
}
async function category(req, res){

    let catId = req.params.cat_id
    let catName = req.params.cat_name
    let products = await ProductModel.find({cat_id: catId})   
    let totals = products.length
    res.render("site/category", {data:{products:products, catName:catName, totals:totals, i:0}})
}
async function product(req, res){

    let prdId = req.params.prd_id
    
    //  Show Product Details
    let product = await ProductModel.find({_id: prdId})
    
    //  Show Comments
    let comments = await CommentModel.find({prd_id: prdId})
    for(key in comments){

        comments[key].toObject.comm_date = moment(comments[key].comm_date).format("YYYY-MM-DD hh:mm:ss")
        // console.log(comments[key].toObject.comm_date)

    }


    res.render("site/product", {data:{product:product[0], comments:comments}})
}
async function comment(req, res){

    // let prd_id = req.params.prd_id
    // let comm_name = req.body.comm_name
    // let comm_mail = req.body.comm_mail
    // let comm_date = req.body.comm_date
    // let comm_details = req.body.comm_details

    let date = new Date()

    let fullYear = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    let commentAdd = new CommentModel({
        prd_id: req.params.prd_id,
        comm_name: req.body.comm_name,
        comm_mail: req.body.comm_mail,
        comm_date: fullYear + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second,
        comm_details: req.body.comm_details
    })
    commentAdd.save()
    res.redirect("/product/"+req.params.prd_id)

}
async function search(req, res){

    let keyWord = req.body.keyword
    newKeyword = ".*"+keyWord.replace(" ", ".*")+".*"

    let products = await ProductModel.find( { prd_name: { $regex: newKeyword, $options: 'i' } } );

    // console.log(newKeyword)
    // console.log(products)

    res.render("site/search", {data:{products:products, i:0, keyWord:keyWord}})
}
function cart(req, res){

    res.render("site/cart")
}
function success(req, res){

    res.render("site/success")
}

module.exports = {
    home:home,
    product:product,
    category:category,
    search:search,
    comment:comment,
    cart:cart,
    success:success
}