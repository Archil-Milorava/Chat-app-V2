import express from "express"
import { logIn, logOut, signUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", logIn )

authRouter.post("/logout", logOut)

authRouter.post("/signup", signUp)



export default authRouter;