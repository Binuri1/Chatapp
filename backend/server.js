import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongodb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) //to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser())  //parse cookies to middleware

app.use("/api/auth",authRoutes);  
app.use("/api/messages",messageRoutes);


// app.get("/", (req,res)=>{
//     //root route http://localhost:5000/
//     res.send("Hello world!!!")
// })

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server listen on port, ${PORT}`)
});