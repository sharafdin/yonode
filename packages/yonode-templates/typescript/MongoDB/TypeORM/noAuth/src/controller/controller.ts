import AppDataSource from "config/db.config";
import { EntityName } from "entity/Entity";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const entity = AppDataSource.getMongoRepository(EntityName);

    const newData = entity.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    await entity.save(newData);

    res.json({ status: 201, message: newData });
  } catch (error) {}
};
