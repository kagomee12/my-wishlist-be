import { Router } from "express";
import authRouter from "./authRouter";
import userRouter from "./userRoutes";
import wishListRouter from "./wishListRoutes";

const router = Router();
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/wishlist", wishListRouter);

export default router;
