import express from "express";
const app = express();
const port = 8085;
app.use(express.json());
import cors from  "cors";
const corsOptions = {
  origin: ["http://localhost:8000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

import router from "./route/route";

app.listen(port, () => {
  console.log("server on");
});

app.use(router);
