import { Request, Response } from "express";
import {
  getWishListbyOwnerId,
  addWishList,
  deleteWishList,
  getAllWishList,
  updateWishList,
  updatedStatusWishList,
  getWishListbyId,
} from "../services/wishListService";
import errorHandler from "../utils/errorHandler";
import {
  wishListSchema,
  wishListStatusSchema,
} from "../validators/wishListSchema";

export const getWishlistbyOwner = async (req: Request, res: Response) => {
  try {
    const ownerId = res.locals.user.id;
    const wishList = await getWishListbyOwnerId(ownerId);
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "success get wish list",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const addWishlist = async (req: Request, res: Response) => {
  try {
    await wishListSchema.validateAsync(req.body);
    const ownerId = res.locals.user.id;
    const wishList = await addWishList(ownerId, req.body.items);
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "success create wishlist",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const deleteWishlist = async (req: Request, res: Response) => {
  try {
    const wishList = await deleteWishList(req.params.id);
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "success delete wishlist",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getAllWishlist = async (req: Request, res: Response) => {
  try {
    const wishList = await getAllWishList();
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "success get all wishlist",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const updateWishlist = async (req: Request, res: Response) => {
  try {
    await wishListSchema.validateAsync(req.body);
    const wishList = await updateWishList(req.params.id, req.body.items);
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "success update wishlist",
    });
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
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "success update wishlist status",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getWishListById = async (req: Request, res: Response) => {
  try {
    const wishList = await getWishListbyId(req.params.id);
    res.status(200).json({
      status: "success",
      data: wishList,
      message: "Wish list by owner",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};
