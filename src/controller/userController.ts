import { editUser, getAllUsers, getUserById } from "../services/userService";
import errorHandler from "../utils/errorHandler";

export const getUser = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        res.status(200).json({ messages: "success", data });
    } catch (error) {
        errorHandler(res, error as unknown as Error);
    }
};

export const editUserbyId = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const data = await editUser(id, req.body);
        res.status(200).json({ messages: "success", data });
    } catch (error) {
        errorHandler(res, error as unknown as Error);
    }
};

export const getAllUser = async (req: any, res: any) => {
    try {
        const data = await getAllUsers();
        res.status(200).json({ messages: "success", data });
    } catch (error) {
        errorHandler(res, error as unknown as Error);
    }
};

