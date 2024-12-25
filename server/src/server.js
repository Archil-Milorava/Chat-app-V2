import express, { json } from "express";
import "dotenv/config";
import authRouter from "./routes/auth.routes.js";
import connectDB from "./DB/connectDB.js";

const app = express();

const PORT = 5001 || process.env.PORT;

app.use(express.json())
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`the server is running on a port ${PORT}`);
});
