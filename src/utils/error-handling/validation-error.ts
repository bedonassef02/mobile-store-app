import { NextFunction, Request, Response } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';

// Middleware to handle validation errors
export const handleValidationErrorsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
