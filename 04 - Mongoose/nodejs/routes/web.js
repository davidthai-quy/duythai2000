const router = require("express").Router()
const UserController = require("../apps/controllers/admin/User")
const CategoryController = require("../apps/controllers/admin/Category")
const ProductController = require("../apps/controllers/admin/Product")
const AdminController = require("../apps/controllers/admin/Admin")
const Auth = require("../apps/middleware/admin/auth")

const IndexController = require("../apps/controllers/site/Index")
const Category = require("../apps/middleware/site/category")

module.exports = (app) => {

app.group("/login", (router) => {
    router.use((req, res, next) => {
        return Auth.authCheck(req, res, next)
    })
    router.get("/", AdminController.getLogin)
    router.post("/", AdminController.postLogin)
})

app.group("/admin", (router) => {
    router.use((req, res, next) => {
        return Auth.authGuest(req, res, next)
    })

    router.get("/logout", AdminController.getLogout)
    router.get("/dashboard", AdminController.getDashboard)

    router.get("/product/list", ProductController.getList)
    router.get("/product/add", ProductController.getAdd)
    router.post("/product/add", ProductController.postAdd)
    router.get("/product/edit/:prd_id", ProductController.getEdit)
    router.post("/product/edit/:prd_id", ProductController.postEdit)
    router.get("/product/del/:prd_id", ProductController.getDel)
})

app.group("/", (router) => {

    router.use((req, res, next) => {
        return Category(req, res, next)
    })

    router.get("", IndexController.home)
    router.get("/category/:prd_name/:_id", IndexController.category)
    router.get("/product/:prd_id", IndexController.product)
    router.get("/search", IndexController.search)
    router.get("/cart", IndexController.cart)
    router.get("/success", IndexController.success)
})

// // Acient Middleware
// router.get("/dashboard", (req, res, next) => {
//     if (!req.session.mail) {
//         return res.redirect("/login")
//     }
//     next()
// }, AdminController.getDashboard)


// router.get("/login", AdminController.getLogin)
// router.post("/login", AdminController.postLogin)

// router.get("/admin/logout", AdminController.getLogout)
// router.get("/admin/dashboard", (req, res, next) => {
//     if (!req.session.mail) {
//         return res.redirect("/admin/login")
//     }
//     next()
// }, AdminController.getDashboard)

// router.get("/product/list", ProductController.getList)
// router.get("/product/add", ProductController.getAdd)
// router.post("/product/add", ProductController.postAdd)
// router.get("/product/edit/:prd_id", ProductController.getEdit)
// router.post("/product/edit/:prd_id", ProductController.postEdit)
// router.get("/product/del/:prd_id", ProductController.getDel)

// router.get("/admin/User/list", UserController.getList)
// router.get("/admin/User/add", UserController.getAdd)
// router.get("/admin/User/edit", UserController.getEdit)
// router.get("/admin/User/del", UserController.getDel)

// router.get("/admin/Category/list", CategoryController.getList)
// router.get("/admin/Category/add", CategoryController.getAdd)
// router.get("/admin/Category/edit", CategoryController.getEdit)
// router.get("/admin/Category/del", CategoryController.getDel)

// ///test/:abc
// router.get("/test", ProductController.getTest)
// router.post("/test", ProductController.postTest)

}