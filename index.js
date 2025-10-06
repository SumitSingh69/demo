import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.config.js";
import router from "./routes/task.router.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running ");
  });
});
