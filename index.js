import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.config.js";
import { connectRabbitMQ } from "./config/rabbitmq.config.js";
import router from "./routes/task.router.js";
import messageRouter from "./routes/message.router.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/tasks", router);
app.use("/api/messages", messageRouter);


connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running ");
    connectRabbitMQ();
  });
});
