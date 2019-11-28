const router = require("express").Router()
const UserController = require("../apps/controllers/admin/User")
const CategoryController = require("../apps/controllers/admin/Category")
const ProductController = require("../apps/controllers/admin/Product")
const AdminController = require("../apps/controllers/admin/Admin")

router.get("/admin/login", AdminController.getLogin)
router.post("/admin/login", AdminController.postLogin)
router.get("/admin/logout", AdminController.getLogout)
router.get("/admin/dashboard", AdminController.getDashboard)

router.get("/admin/User/list", UserController.getList)
router.get("/admin/User/add", UserController.getAdd)
router.get("/admin/User/edit", UserController.getEdit)
router.get("/admin/User/del", UserController.getDel)

router.get("/admin/Category/list", CategoryController.getList)
router.get("/admin/Category/add", CategoryController.getAdd)
router.get("/admin/Category/edit", CategoryController.getEdit)
router.get("/admin/Category/del", CategoryController.getDel)

router.get("/admin/product/list", ProductController.getList)
router.get("/admin/product/add", ProductController.getAdd)
router.get("/admin/product/edit", ProductController.getEdit)
router.get("/admin/product/del", ProductController.getDel)

router.get("/test", ProductController.getTest)
router.post("/test", ProductController.postTest)

module.exports = router