const express = require("express");
const doent = require("dotenv");

doent.config();
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(8000, () => console.log("listening on port 8000"));
