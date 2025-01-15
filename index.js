const express = require("express");
const doent = require("dotenv");
const TaskRouter = require("./src/routes/task.routes");

const connectToDatabase = require("./src/database/mongoose.database");

doent.config();
const app = express();

app.use(express.json());

connectToDatabase();
app.use("/tasks", TaskRouter);

app.listen(8000, () => console.log("listening on port 8000"));
