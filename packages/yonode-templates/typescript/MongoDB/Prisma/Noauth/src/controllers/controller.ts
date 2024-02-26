import { Request, Response } from "express";
import prisma from "../../prisma/client";

export const controller = async (req: Request, res: Response) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
      },
    });
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};
