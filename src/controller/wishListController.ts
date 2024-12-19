import { Request, Response } from "express";
import {
  getWishList,
  addWishList,
  deleteWishList,
  getAllWishList,
  updateWishList,
  updatedStatusWishList,
} from "../services/wishListService";
import errorHandler from "../utils/errorHandler";
import {
  wishListSchema,
  wishListStatusSchema,
} from "../validators/wishListSchema";

export const getWishlist = async (req: Request, res: Response) => {
  try {
    await wishListSchema.validateAsync(req.body);
    const wishList = await getWishList(req.params.id);
    res.status(200).json({ messages: "success", data: wishList });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const addWishlist = async (req: Request, res: Response) => {
  try {
    await wishListSchema.validateAsync(req.body);
    const ownerId = res.locals.user.id;
    const wishList = await addWishList(ownerId, req.body.items);
    res.status(200).json({ messages: "success", data: wishList });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const deleteWishlist = async (req: Request, res: Response) => {
  try {
    const wishList = await deleteWishList(req.params.id);
    res.status(200).json({ messages: "success", data: wishList });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getAllWishlist = async (req: Request, res: Response) => {
  try {
    const wishList = await getAllWishList();
    res.status(200).json({ messages: "success", data: wishList });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const updateWishlist = async (req: Request, res: Response) => {
  try {
    await wishListSchema.validateAsync(req.body);
    const wishList = await updateWishList(req.params.id, req.body.items);
    res.status(200).json({ messages: "success", data: wishList });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const updateStatusWishlist = async (req: Request, res: Response) => {
  try {
    await wishListStatusSchema.validateAsync(req.body);
    const wishList = await updatedStatusWishList(
      req.params.id,
      req.body.isFulfield
    );
    res.status(200).json({ messages: "success", data: wishList });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};
