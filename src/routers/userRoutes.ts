import { Router } from "express";
import {
  editUserbyId,
  getAllUser,
  getUser,
} from "../controller/userController";
import authenticate from "../middlewares/authenticate";

const userRouter = Router();

userRouter.use(authenticate);
userRouter.get("/", getAllUser);
userRouter.get("/:id", getUser);
userRouter.patch("/edit", editUserbyId);

export default userRouter;
