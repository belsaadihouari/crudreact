import { Request, Response } from "express";
import { userType } from "../util/TypeUser";
import { validationzod } from "../util/validationzod";
import prisma from "../util/prismaClient";
import { hachPassword } from "../util/hachPassword";
import { Typesignin } from "../util/Typesignin";
import { validationzodsignin } from "../util/validationzodsignin";
const createUser = async (req: Request<{}, {}, userType>, res: Response) => {
  const { username, email, password, cpassword, isAdmin } = req.body;

  try {
    const validation = validationzod.safeParse(req.body);
    console.log(validation);

    if (!validation.success) {
      return res.json({ validator: "error validation of inputs" });
    }
    const user = await prisma.user.findMany({
      where: {
        email: req.body.email,
      },
    });

    if (user.length > 0) {
      return res.json({ message: "email already exist" });
    }

    if (req.body.password !== req.body.cpassword) {
      return res.json({ cpass: "erreur confirm password" });
    }

    const hach = await hachPassword(password);
    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hach,
        isAdmin: isAdmin,
      },
    });
    return res.json({ response: "user added successfuly" });
  } catch {
    res.status(500).json("error");
  }
};

const getData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
      },
    });

    return res.json(data);
  } catch (error) {}
};

const authUser = async (req: Request<{}, {}, Typesignin>, res: Response) => {
  try {
    const validation = validationzodsignin.safeParse(req.body);
    if (!validation.success) {
      return res.json({ validator: "error validation input" });
    }
    const user = await prisma.user.findMany({
      where: {
        email: req.body.email,
      },
    });
    if (user.length < 1) {
      return res.json({ users: "error email or password" });
    }
  } catch (error) {}
};

export { createUser, getData };
