import db from "../libs/db";

export const addWishList = async (ownerId: string, items: string) => {
  try {
    const wishList = await db.wishlist.create({
      data: {
        ownerId: ownerId,
        items: items,
      },
    });
    return wishList;
  } catch (error) {
    throw error;
  }
};

export const getWishList = async (ownerId: string) => {
  try {
    const wishList = await db.wishlist.findMany({
      where: {
        ownerId: ownerId,
      },
    });
    return wishList;
  } catch (error) {
    throw error;
  }
};

export const deleteWishList = async (id: string) => {
  try {
    const wishList = await db.wishlist.delete({
      where: {
        id: id,
      },
    });
    return wishList;
  } catch (error) {
    throw error;
  }
};

export const getAllWishList = async () => {
  try {
    const wishList = await db.wishlist.findMany();
    return wishList;
  } catch (error) {
    throw error;
  }
};

export const updateWishList = async (id: string, items: string) => {
  try {
    const wishList = await db.wishlist.update({
      where: {
        id: id,
      },
      data: {
        items: items,
      },
    });
    return wishList;
  } catch (error) {
    throw error;
  }
};

export const updatedStatusWishList = async (id: string, status: boolean) => {
  try {
    const wishList = await db.wishlist.update({
      where: {
        id: id,
      },
      data: {
        isFulfield: status,
      },
    });
    return wishList;
  } catch (error) {
    throw error;
  }
};
