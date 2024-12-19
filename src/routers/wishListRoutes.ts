import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  addWishlist,
  deleteWishlist,
  getAllWishlist,
  getWishlist,
  updateStatusWishlist,
  updateWishlist,
} from "../controller/wishListController";

const wishListRouter = Router();

wishListRouter.use(authenticate);

wishListRouter.get("/", getAllWishlist);
wishListRouter.get("/:id", getWishlist);
wishListRouter.post("/", addWishlist);
wishListRouter.patch("/:id", updateWishlist);
wishListRouter.delete("/:id", deleteWishlist);
wishListRouter.patch("/status/:id", updateStatusWishlist);

export default wishListRouter;
