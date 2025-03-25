const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("Check the logs")
    res.send("Express on Vercel")
});

app.post("/webhook", (req, res) => {
    res.send(`data from request ${req.body}`)
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;