import mongoose from "mongoose";
import Product from "../models/productModel.js";

export const createProduct =  async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please fill all fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
}

export const getProducts =async (req,res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.status(404).json({ success: true, message: "products not found" })
            
        }
        await Product.deleteOne({_id : id})
        res.status(200).json({success : true , message : "Products deleted"})
    } catch (error) {
         return res.status(500).json({ success: false, message: "server error" });
    }
}

export const updateProduct =  async (req, res) => {
    const { id } = req.params
    const product = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ success: false, message: "Invalid id" });
    }
    try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
}