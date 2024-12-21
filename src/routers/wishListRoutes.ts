import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  addWishlist,
  deleteWishlist,
  getAllWishlist,
  getWishlistbyOwner,
  updateStatusWishlist,
  updateWishlist,
  getWishListById,
} from "../controller/wishListController";

const wishListRouter = Router();

wishListRouter.use(authenticate);

wishListRouter.get("/", getAllWishlist);
wishListRouter.get("/owner/:id", getWishlistbyOwner);
wishListRouter.post("/", addWishlist);
wishListRouter.delete("/:id", deleteWishlist);
wishListRouter.get("/:id", getWishListById);
wishListRouter.patch("/:id", updateWishlist);
wishListRouter.patch("/status/:id", updateStatusWishlist);

export default wishListRouter;
