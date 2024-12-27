import express from "express"
import { getCurrentUser, logIn, logOut, signUp } from "../controllers/auth.controller.js";
import { authCheck } from "../middlewares/authCheck.js";

const authRouter = express.Router();

authRouter.post("/login", logIn )

authRouter.post("/logout", logOut)

authRouter.post("/signup", signUp)

authRouter.get("/currentuser", authCheck, getCurrentUser)



export default authRouter;