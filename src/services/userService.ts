import db from "../libs/db";

export const getAllUsers = async () => {
  try {
    const data = await db.user.findMany({
      select: { id: true, email: true, gender: true, name: true },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const data = await db.user.findUnique({
      where: { id },
      select: { id: true, email: true, gender: true, name: true },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const editUser = async (id: string, data: any) => {
  try {
    const user = await db.user.update({ where: { id }, data });
    return user;
  } catch (error) {
    throw error;
  }
};
