import express from "express";

const app = express();
app.use(express.json());

app.get("/status", (req, res) => {
    res.send({ok: true});
});

const port = parseFloat(process.env.PORT ?? "8080");

app.listen(port, () => console.log(`Listening on port :${port}`));
