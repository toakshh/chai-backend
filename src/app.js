import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

/**
 * ==========MIDDLEWARES===========
 * cors, json limit, url data handeling, basic assets, server-secured cookies
 */

// Setting to accept connections
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
// Limiting the maxSize of json data
app.use(express.json({ limit: "16kb" }))

// Handeling URL data 
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Setting up assets for basic access level like favicon,images  
app.use(express.static("public"))

// Setting up server secured cookies
app.use(cookieParser())


// routes
import userRouter from "./routes/user.routes.js"

// routes declaration
//NOTE:- as it now goes through a middleware so we are using app.use instead of app.get
app.use("/api/v1/users", userRouter)



export { app } 