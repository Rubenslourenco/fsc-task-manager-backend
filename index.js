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

        if (!task) {
            return res.status(404).send("Task not found");
        }
        return res.status(200).send(task);
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

app.patch("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const taskToUpdated = await TaskModel.findById(taskId);

        const allowedUpdates = ["isCompleted"];
        const requestedUpdates = Object.keys(req.body);

        for (update of requestedUpdates) {
            if (allowedUpdates.includes(update)) {
                taskToUpdated[update] = req.body[update];
            } else {
                return res.status(500).send("Invalid update");
            }
        }

        await taskToUpdated.save();
        res.status(200).send(taskToUpdated);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const tasksTodelete = await TaskModel.findById(taskId);

        if (!tasksTodelete) {
            return res.status(404).send("Task not found");
        }

        const deletedTasks = await TaskModel.findByIdAndDelete(taskId);

        res.status(200).send(deletedTasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8000, () => console.log("listening on port 8000"));
