import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routers";

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./src/utils/swagger/swagger-output.json");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
