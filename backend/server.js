import express from "express";
import { connectDb } from "./config/connectDb.js";
import dotenv from "dotenv";
import Product from "./models/productModel.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/products", async (req, res) => {
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
});
app.get("/", async (res, req) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error" });
  }
});

app.listen(PORT, () => {
  connectDb();
  console.log(`server running at ${PORT}`);
});
