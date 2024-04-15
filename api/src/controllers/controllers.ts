import { Request, Response } from "express";
import { userType } from "../util/TypeUser";
import { PrismaClient } from "@prisma/client";
import { validationzod } from "../util/validationzod";
const prisma = new PrismaClient();
const createUser = async (req: Request<{}, {}, userType>, res: Response) => {
  const { username, email, password, cpassword, isAdmin } = req.body;
  try {
    const validation = validationzod.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation);
    }
    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
        isAdmin: isAdmin,
      },
    });
    res.status(201).json(newUser);
  } catch {
    res.status(500).json("error");
  }
};

export default createUser;
