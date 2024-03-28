const express = require('express');
const { createPcategory, updatePcategory, deletePcategory,getPcategory, getAllPcategory } = require('../controller/pCategoryCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/', authMiddleware,isAdmin, createPcategory);
router.get('/', getAllPcategory);
router.put('/:id', authMiddleware,isAdmin, updatePcategory);
router.delete('/:id', authMiddleware,isAdmin, deletePcategory);
router.get('/:id', authMiddleware, getPcategory);




module.exports = router;

