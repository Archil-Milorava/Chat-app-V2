import express, { json } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRouter from "./routes/auth.routes.js";
import connectDB from "./DB/connectDB.js";
import messageRoute from "./routes/message.routes.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();

const PORT = 5001 || process.env.PORT;

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`the server is running on a port ${PORT}`);
});
