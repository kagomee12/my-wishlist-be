import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import { login, register } from "../services/authService";
import { userSchema } from "../validators/userSchema";
import { loginSchema } from "../validators/loginShema";
import { getUserById } from "../services/userService";

export const loginService = async (req: Request, res: Response) => {
  try {
    await loginSchema.validateAsync(req.body);
    const { email, password } = req.body;
    const data = await login(email, password);
    res.status(200).json({ messages: "success", data });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const registerService = async (req: Request, res: Response) => {
  try {
    await userSchema.validateAsync(req.body);
    const { name, email, password, gender } = req.body;
    const data = await register(name, email, password, gender);
    res.status(200).json({ messages: "success", data });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const getUserMe = async (req: Request, res: Response) => {
  try {
    const id = res.locals.user.id;
    const data = await getUserById(id);
    res.status(200).json({ messages: "success", data });
  } catch (error) {}
};
