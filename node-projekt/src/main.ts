import express from "express";

function main() {
    const app = express();

    app.get("/hello/:name", (req, res) => {
        return res.status(200).send(`Hello ${req.params.name}`);
    });

    app.listen(8080);
}

main();
