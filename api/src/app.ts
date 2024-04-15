import express from "express";
const app = express();
const port = 8085;
app.use(express.json());

import router from "./route/route";

app.listen(port, () => {
  console.log("server on");
});

app.use(router);
