import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/task.controller.js";
const router = express.Router();

router.post("/create", createTask);
router.get("/getPendingTasks", getTasks);
router.patch("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);
export default router;