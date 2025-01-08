const express = require("express");
const doent = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

doent.config();
const app = express();

connectToDatabase();

app.get("/", async (req, res) => {
    try {
        const task = await TaskModel.find({});
        res.status(200).send(task);
    } catch (error) {
        res.status;
    }
});

app.post("/", async (req, res) => {
    const newTask = new TaskModel();
});

app.listen(8000, () => console.log("listening on port 8000"));
