import express from "express";
import { createTask, getTasks, updateTask } from "../controllers/task.controller.js";
const router = express.Router();

router.post("/create", createTask);
router.get("/getPendingTasks", getTasks);
router.patch("/updateTask/:id", updateTask);
export default router;