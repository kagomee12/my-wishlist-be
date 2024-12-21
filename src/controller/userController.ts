import { editUser, getAllUsers, getUserById } from "../services/userService";
import errorHandler from "../utils/errorHandler";

export const getUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    res.status(200).json({
      status: "success",
      data: data,
      message: "get user successfully",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const editUserbyId = async (req: any, res: any) => {
  try {
    const { id } = res.locals.user;
    const data = await editUser(id, req.body);
    res.status(200).json({
      status: "success",
      data: data,
      message: "success edit profile",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getAllUser = async (req: any, res: any) => {
  try {
    const data = await getAllUsers();
    res.status(200).json({
      status: "success",
      data: data,
      message: "success get all user",
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};
