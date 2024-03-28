const Pcategory = require('../models/prodCategoryModel');
const validateMongodb = require('../utils/validateMongodb');
const asyncHandler = require('express-async-handler');

const createPcategory = asyncHandler(async(req,res)=>{
    try {
        const newPcategory = await Pcategory.create(req.body);
        res.json(newPcategory);
    } catch (error) {
        throw new Error(error)
    }
});

const updatePcategory = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const editPcategory = await Pcategory.findByIdAndUpdate(id,req.body,{new:true});
        res.json(editPcategory);
    } catch (error) {
        throw new Error(error)
    };
});

const deletePcategory = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const deletedPcategory = await Pcategory.findByIdAndDelete(id);
        res.json(deletedPcategory);
    } catch (error) {
        throw new Error(error)
    };
});

const getPcategory = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const showPcategory = await Pcategory.findById(id);
        res.json(showPcategory);
    } catch (error) {
        throw new Error(error)
    };
});

const getAllPcategory = asyncHandler(async(req,res)=>{
    try {
        const allPcategory = await Pcategory.find();
        res.json(allPcategory);
    } catch (error) {
        throw new Error(error)
    };
});

module.exports = {createPcategory,updatePcategory , deletePcategory ,getPcategory ,getAllPcategory };