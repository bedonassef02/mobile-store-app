import { Request, Response } from "express";

export const notFoundException = (req: Request, res: Response) => {
  res.status(404).send({ message: 'Not Found' });
};
