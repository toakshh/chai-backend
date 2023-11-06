// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log("server started at PORT : ", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!! ", err)
    })

// ------------------------------------------------------------------------------
// import mongoose from "mongoose"
// import express from "express"
// import { DB_NAME } from "./constants";
// const app = express()
//     ; (
//         async () => {
//             try {
//                 await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//                 app.on("error", (error) => {
//                     console.log("Error in connection from MongoDB", error)
//                     throw error
//                 })
//                 app.listen(process.env.PORT, () => {
//                     console.log("Congrats! app is running successfully on Port : ", process.env.PORT)
//                 })
//             } catch (error) {
//                 console.log(error)
//                 throw error
//             }
//         }
//     )()

