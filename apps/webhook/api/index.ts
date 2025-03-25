const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Check the logs")
    res.send("Express on Vercel")
});

app.post("/webhook", async (req, res) => {
    console.log(`check logs ${req.body}`)

    await fetch("s1251143.eu-nbg-2.betterstackdata.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
    });
    res.send(`data from request ${JSON.stringify(req.body)}`)
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;