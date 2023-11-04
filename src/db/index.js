import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    // console.log(process.env.MONGODB_URL)
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB connected successfully !! DB Host: ", connectionInstance.connection.host)
    } catch (error) {
        console.log("Error captured in MONGODB - ", error)
        // throw error
        process.exit(1)
    }
}

export default connectDB