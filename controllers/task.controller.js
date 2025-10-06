import {
  createTaskService,
  getTasksService,
  updateTaskStatusService,
  deleteTaskService,
} from "../services/task.service.js";

export const createTask = async (req, res) => {
  try {
    const result = await createTaskService(req.body);
    res.status(200).json({
      status: "success",
      message: result.message,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const result = await getTasksService();
    res.status(200).json({
      status: "success",
      message: "Tasks retrieved successfully",
      data: result.data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) {
      throw new Error("Task id is required");
    }
    const result = await updateTaskStatusService(id, req.body);
    res.status(200).json({
      status: "success",
      message: result.message,
      data: result.data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) {
      throw new Error("Task id is required");
    }
    const result = await deleteTaskService(id);
    res.status(200).json({
      status: "success",
      message: result.message,
      data: result.data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
