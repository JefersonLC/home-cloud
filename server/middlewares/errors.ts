import { NextFunction, Request, Response } from 'express';

export function enoentError(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return res.status(400).json(err)
}
