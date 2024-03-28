const Bcategory = require('../models/blogCategoryModel');
const validateMongodb = require('../utils/validateMongodb');
const asyncHandler = require('express-async-handler');

const createBcategory = asyncHandler(async(req,res)=>{
    try {
        const newBcategory = await Bcategory.create(req.body);
        res.json(newBcategory);
    } catch (error) {
        throw new Error(error)
    }
});

const updateBcategory = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const editBcategory = await Bcategory.findByIdAndUpdate(id,req.body,{new:true});
        res.json(editBcategory);
    } catch (error) {
        throw new Error(error)
    };
});

const deleteBcategory = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const deletedBcategory = await Bcategory.findByIdAndDelete(id);
        res.json(deletedBcategory);
    } catch (error) {
        throw new Error(error)
    };
});

const getBcategory = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const showBcategory = await Bcategory.findById(id);
        res.json(showBcategory);
    } catch (error) {
        throw new Error(error)
    };
});

const getAllBcategory = asyncHandler(async(req,res)=>{
    try {
        const allBcategory = await Bcategory.find();
        res.json(allBcategory);
    } catch (error) {
        throw new Error(error)
    };
});

module.exports = {createBcategory,updateBcategory , deleteBcategory ,getBcategory ,getAllBcategory };
