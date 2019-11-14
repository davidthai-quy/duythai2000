const router = require("express").Router()
const ProductController = require("../apps/controllers/admin/Product")
const AdminController = require("../apps/controllers/admin/Admin")
const CategoryController = require("../apps/controllers/admin/Category")
const UserController = require("../apps/controllers/admin/User")

router.get("/admin/login", AdminController.getLogin)
router.get("/admin/logout", AdminController.getLogout)
router.get("/admin/dashboard", AdminController.getDashoard)

router.get("/admin/product/list", ProductController.getList)
router.get("/admin/product/add", ProductController.getAdd)
router.get("/admin/product/edit", ProductController.getEdit)
router.get("/admin/product/del", ProductController.getDel)

router.get("/admin/category/list", CategoryController.getList)
router.get("/admin/category/add", CategoryController.getAdd)
router.get("/admin/category/edit", CategoryController.getEdit)
router.get("/admin/category/del", CategoryController.getDel)

router.get("/admin/user/list", UserController.getList)
router.get("/admin/user/add", UserController.getAdd)
router.get("/admin/user/edit", UserController.getEdit)
router.get("/admin/user/del", UserController.getDel)

//test
router.get("/test", UserController.getTest)
router.post("/test", UserController.postTest)

module.exports = router