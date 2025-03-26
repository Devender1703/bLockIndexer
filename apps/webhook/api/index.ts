const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Check the logs")
    res.send("Express on Vercel")
});

app.post("/webhook", (req, res) => {
    console.log(`check logs ${JSON.stringify(req.body)}`)

    fetch("https://s1251143.eu-nbg-2.betterstackdata.com", {
        method: "POST",
        headers: { "Content-Type": "application/json",
            "Authorization": `Bearer JmySQo4VdjHDyLcvT1soWhB6`
        },
        body: JSON.stringify(req.body)
    }).then((val) => {
        res.send(`data from request ${JSON.stringify(req.body)}`)
    }).catch((err) => {
        res.send(`error from api ${err}`)
    });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;