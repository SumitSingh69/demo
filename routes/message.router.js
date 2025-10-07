import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
const messageRouter = express.Router();

messageRouter.post("/sendMessage", sendMessage);

export default messageRouter;