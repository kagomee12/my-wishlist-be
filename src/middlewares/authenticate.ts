import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ messages: "Unauthorized" });
    return;
  }
  const decoded = jwt.verify(token, process.env.SECRET_KEY || "secret");
  res.locals.user = decoded;
  next();
};

export default authenticate;
