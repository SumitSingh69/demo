import Task from "../models/task.model.js";

export const createTaskService = async (taskData) => {
  try {
    
    const newTask = new Task(taskData);
    await newTask.save();
    return { message: "Task created successfully" };
  } catch (err) {
    throw new Error("Task creation failed");
  }
};

export const getTasksService = async () => {
  try {
    const tasks = await Task.find({ status: "pending" });
    if (!tasks) {
      res.send("No tasks found");
    }
    console.log(tasks);
    return {
      data: tasks,
      message: "No tasks found",
    };
  } catch (err) {
    throw new Error("Failed to retrieve tasks");
  }
};

export const updateTaskStatusService = async (taskId, taskBody) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, taskBody, {
      new: true,
    });
    if (!updatedTask) {
      throw new Error("no such task found");
    }
    return { message: "Task status updated successfully", data: updatedTask };
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to update task status");
  }
};

export const deleteTaskService = async (taskId) => {
    try{
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if(!deletedTask){
            throw new Error("No such task found");
        }
        return {message: "Task deleted successfully", data: deletedTask};
    }catch(err){
        throw new Error("Failed to delete task");
    }
}