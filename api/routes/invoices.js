const Invoice = require("../models/Invoice.js");
const express = require("express");
const router = express.Router();

// GET ALL Invoice
router.get("/get-all",async (req,res) => {
    try{
        const invoices = await 
        Invoice.find();
        res.status(200).json(invoices)
    } catch(error) {
        res.status(500).json(error);
    }
});

// CREATE
router.post("/add-invoice",async(req,res) => {
    try {
       const newInvoice = new Invoice(req.body)
       await newInvoice.save();
       res.status(200).json("Item added sucessfully.")
    } catch (error) {
        res.status(500).json(error)
    }
});


module.exports = router;
