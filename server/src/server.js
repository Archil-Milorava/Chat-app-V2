import express, { json } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser"

import authRouter from "./routes/auth.routes.js";
import connectDB from "./DB/connectDB.js";
import messageRoute from "./routes/message.routes.js";

const app = express();

const PORT = 5001 || process.env.PORT;

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`the server is running on a port ${PORT}`);
});
