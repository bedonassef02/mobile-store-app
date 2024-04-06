import { Request, Response } from "express";

export const handleException = (err: any, req:Request, res:Response) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
};
