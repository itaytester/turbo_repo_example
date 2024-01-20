import express from "express";
const app = express();

app.get("/", (req, res) => res.send("It works!"));

if (import.meta.env.PORT) app.listen(import.meta.env.PORT);

export const viteNodeApp = app;
