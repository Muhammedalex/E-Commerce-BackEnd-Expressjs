const Brand = require('../models/brandModel');
const validateMongodb = require('../utils/validateMongodb');
const asyncHandler = require('express-async-handler');

const createBrand = asyncHandler(async(req,res)=>{
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error)
    }
});

const updateBrand = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const editBrand = await Brand.findByIdAndUpdate(id,req.body,{new:true});
        res.json(editBrand);
    } catch (error) {
        throw new Error(error)
    };
});

const deleteBrand = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id);
        res.json(deletedBrand);
    } catch (error) {
        throw new Error(error)
    };
});

const getBrand = asyncHandler(async(req,res)=>{
    const {id}= req.params;
    validateMongodb(id);
    try {
        const showBrand = await Brand.findById(id);
        res.json(showBrand);
    } catch (error) {
        throw new Error(error)
    };
});

const getAllBrand = asyncHandler(async(req,res)=>{
    try {
        const allBrand = await Brand.find();
        res.json(allBrand);
    } catch (error) {
        throw new Error(error)
    };
});

module.exports = {createBrand,updateBrand , deleteBrand ,getBrand ,getAllBrand };
