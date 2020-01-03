const router = require("express").Router()
const UserController = require("../apps/controllers/admin/User")
const CategoryController = require("../apps/controllers/admin/Category")
const ProductController = require("../apps/controllers/admin/Product")
const AdminController = require("../apps/controllers/admin/Admin")
const Auth = require("../apps/middlewares/admin/auth")
const Category = require("../apps/middlewares/site/category")

const IndexController = require("../apps/controllers/site")

module.exports = (app)=>{

    app.group("/login", (router)=>{

        router.use((req, res, next)=>{

            return Auth.authCheck(req, res, next)
        });
        
        router.get("/", AdminController.getLogin)
        router.post("/", AdminController.postLogin)
    })

    app.group("/admin", (router)=>{

        router.use((req, res, next)=>{

            return Auth.authGuest(req, res, next)
        });

        router.get("/logout", AdminController.getLogout)
        router.get("/dashboard", AdminController.getDashboard)

        router.get("/product/list", ProductController.getList)
        router.get("/product/add", ProductController.getAdd)
        router.post("/product/add", ProductController.postAdd)
        router.get("/product/edit/:prd_id", ProductController.getEdit)
        router.post("/product/edit/:prd_id", ProductController.postEdit)
        router.get("/product/del/:prd_id", ProductController.getDel)
    })

    app.group("/", (router)=>{

        router.use((req, res, next)=>{

            return Category(req, res, next)
        })

        router.get("/", IndexController.home)
        router.get("/category/:cat_name/:cat_id", IndexController.category)
        router.get("/product/:prd_id", IndexController.product)
        router.post("/product/:prd_id", IndexController.comment)
        router.post("/search", IndexController.search)
        router.get("/cart", IndexController.cart)
        router.get("/success", IndexController.success)

        router.get("/test", ProductController.getTest)
        router.post("/test", ProductController.postTest)
    })



    // router.get("/admin/User/list", UserController.getList)
    // router.get("/admin/User/add", UserController.getAdd)
    // router.get("/admin/User/edit", UserController.getEdit)
    // router.get("/admin/User/del", UserController.getDel)

    // router.get("/admin/Category/list", CategoryController.getList)
    // router.get("/admin/Category/add", CategoryController.getAdd)
    // router.get("/admin/Category/edit", CategoryController.getEdit)
    // router.get("/admin/Category/del", CategoryController.getDel)

    

}