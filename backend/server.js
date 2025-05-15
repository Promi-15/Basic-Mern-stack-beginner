import express from "express";
import { connectDb } from "./config/connectDb.js";
import dotenv from "dotenv";
import productRoutes from './routes/productRoutes.js'

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products/",productRoutes)

app.listen(PORT, () => {
  connectDb();
  console.log(`server running at ${PORT}`);
});
