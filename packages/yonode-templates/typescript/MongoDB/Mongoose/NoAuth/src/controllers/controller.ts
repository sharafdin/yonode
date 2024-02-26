import { Request, Response } from "express";
import User from "models/model";

export const controller = async (req: Request, res: Response) => {
  try {
    const newData = new User({
      name: req.body.name,
    });

    await newData.save();

    res.send(newData);
  } catch (error) {}
};
