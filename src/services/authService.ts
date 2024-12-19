import { Gender } from "@prisma/client";
import bcrypt from "bcrypt";
import db from "../libs/db";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (email: string, password: string) => {
  try {
    const data = await db.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!data) {
      throw new Error("User not found");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(
      {
        id: data.id,
        email: data.email,
        name: data.name,
      },
      (process.env.SECRETKEY as string) || "secret",
      {
        expiresIn: "1d",
      }
    );

    return token;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string,
  Gender: Gender
) => {
  try {
    const data = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (data) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        gender: Gender,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
