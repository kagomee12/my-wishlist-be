import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routers";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
