const express = require("express");
const doent = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

doent.config();
const app = express();

connectToDatabase();

app.get("/tasks", async (req, res) => {
    try {
        const task = await TaskModel.find({});
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/tasks", async (req, res) => {
    // const newTask = new TaskModel();
    console.log(req.body);

    res.status(200).send("created");
});

app.listen(8000, () => console.log("listening on port 8000"));
