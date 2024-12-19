import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  loginService,
  registerService,
  getUserMe,
} from "../controller/authController";

const authRouter = Router();

authRouter.post("/login", loginService);
authRouter.post("/register", registerService);
authRouter.get("/me", authenticate, getUserMe);

export default authRouter;
