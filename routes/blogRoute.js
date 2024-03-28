const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlog, deleteBlog, likeBlog, disLikeBlog, uploadImages } = require('../controller/blogCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');
const { uploadPhoto,blogImgResize } = require('../middlewares/uploadImages');
const router = express.Router();


router.post('/',authMiddleware,isAdmin, createBlog);
router.get('/', getAllBlog);
router.put(
    "/:id/upload",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 10),
    blogImgResize,
    uploadImages
  );
router.put('/likes', authMiddleware , likeBlog);
router.put('/dislikes', authMiddleware , disLikeBlog)
router.put('/:id',authMiddleware,isAdmin, updateBlog);
router.get('/:id', getBlog);
router.delete('/:id',authMiddleware,isAdmin, deleteBlog);




module.exports = router