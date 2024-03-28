const express = require('express');
const {createBcategory,updateBcategory , deleteBcategory ,getBcategory ,getAllBcategory } = require('../controller/bCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/', authMiddleware,isAdmin, createBcategory);
router.get('/', getAllBcategory);
router.put('/:id', authMiddleware,isAdmin, updateBcategory);
router.delete('/:id', authMiddleware,isAdmin, deleteBcategory);
router.get('/:id', authMiddleware , isAdmin, getBcategory);

module.exports = router;