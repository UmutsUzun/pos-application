const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

// GET ALL CATEGORY
router.get("/get-all",async (req,res) => {
    try{
        const categories = await 
        Category.find();
        res.status(200).json(categories)
    } catch(error) {
        res.status(500).json(error);
    }
});

// CREATE
router.post("/add-category",async(req,res) => {
    try {
       const newCategory = new Category(req.body)
       await newCategory.save();
       res.status(200).json("Item added sucessfully.")
    } catch (error) {
        res.status(500).json(error)
    }
});
//  UPDATE
router.put("/update-category",async (req,res) => {
    try{
        await Category.findOneAndUpdate({ _id : req.body.categoryId},req.body);
        res.status(200).json("Item updated sucessfully.")
    } catch(error) {
        res.status(500).json(error);
    }
})
//DELETE
router.delete("/delete-category",async (req,res) => {
    try{
        await Category.findOneAndDelete({ _id : req.body.categoryId});
        res.status(200).json("Item deleted sucessfully.")
    } catch(error) {
        res.status(500).json(error);
    }
})



module.exports = router;
