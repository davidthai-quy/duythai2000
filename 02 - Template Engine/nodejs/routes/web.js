const router = require("express").Router()
const AdminController = require("../apps/controllers/admin/Admin")
const ProductController = require("../apps/controllers/admin/Product")

router.get("/admin/login", AdminController.getLogin)
router.post("/admin/login", AdminController.postLogin)
router.get("/admin/logout", AdminController.getLogout)
router.get("/admin/dashboard", AdminController.getDashboard)
//
router.get("/admin/product/list", ProductController.getList)
router.get("/admin/product/add", ProductController.getAdd)
router.get("/admin/product/edit", ProductController.getEdit)
router.get("/admin/product/del", ProductController.getDel)
//
router.get("/test", ProductController.getTest)
router.post("/test", ProductController.postTest)

module.exports = router