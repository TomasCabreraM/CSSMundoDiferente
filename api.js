const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
    console.log("Server Running on port ${port}");
});

app.get("/api/v1/add", (req, res) => {
    const { first = 0, second = 0 } = req.query;
    const total = parseInt(first) + parseInt(second);
    res.status(200).send({
        success: "true",
        total
    })
})