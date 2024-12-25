import express from "express";
import { authCheck } from "../middlewares/authCheck.js";
import {  getDirectMessage, getUsersList, sendMessage } from "../controllers/message.controller.js";

const messageRoute = express.Router();

messageRoute.post("/:id", authCheck, sendMessage)
messageRoute.get("/getUsersList", authCheck, getUsersList)
messageRoute.get("/coversation/:userId", authCheck, getDirectMessage )

export default messageRoute;
