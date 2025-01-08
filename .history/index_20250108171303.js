const express = require("express");
const doent = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

doent.config();
const app = express();
app.use(express.json());

connectToDatabase();

app.get("/tasks", async (req, res) => {
    try {
        const task = await TaskModel.find({});
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await TaskModel.findById(taskId);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);

        await newTask.save();

        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const tasksTodelete = await TaskModel.findById(taskId);

        if (!tasksTodelete) {
            return res.status(500).send("Task not found");
        }

        const deletedTasks = await TaskModel.findByIdAndDelete(taskId);

        res.status(200).send(deletedTasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => console.log("listening on port 8000"));
