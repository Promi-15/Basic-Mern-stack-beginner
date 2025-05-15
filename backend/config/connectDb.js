import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
export const connectDb = async () => {
    try {
        const mongo = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo connected successfully")
    } catch (error) {
        console.log("mongo cannot connect",error.message)
    }
}
