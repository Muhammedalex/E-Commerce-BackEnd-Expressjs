const express = require("express");
const { uploadImages, deleteImages } = require("../controller/uploadCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post(
  "/",
 
  productImgResize,
  uploadPhoto.array("images", 10),
  uploadImages
);

router.delete("/delete-img/:id",  deleteImages);

module.exports = router;