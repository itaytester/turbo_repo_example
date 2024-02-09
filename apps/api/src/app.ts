import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.send("It works!");
});

app.listen(5000);

export const viteNodeApp = app;
