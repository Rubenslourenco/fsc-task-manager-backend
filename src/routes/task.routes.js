const express = require("express");

const TaskController = require("../controllers/task.controller");
const TaskModel = require("../models/task.model.cjs");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);

        await newTask.save();

        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

module.exports = router;
