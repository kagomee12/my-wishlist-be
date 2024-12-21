import { Response } from "express";
import ERROR_CODE from "./constants/errorCode";
import ERROR_MESSAGE from "./constants/errorMessage";

export default function errorHandler(res: Response, err: Error) {
  let message = err.message;

  return res
    .status(ERROR_CODE[message] || 500)
    .json({ status: "error", message: ERROR_MESSAGE[message] || message });
}
