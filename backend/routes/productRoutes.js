import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/productcontrollers.js";
import express from "express";

const router = express.Router();

router.post("/", createProduct);

router.get("/", getProducts);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router;
