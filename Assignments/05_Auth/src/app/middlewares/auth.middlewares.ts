import type { Request, Response, NextFunction } from "express";
import APIError from "../common/error";
import { verifyUserToken } from "../auth/utils/tokens";

export function authenticationMiddleware() {
  return function (req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorization"];

    if (!header) return next();

    if (!header?.startsWith("Bearer"))
      return next(
        APIError.unauthorized(
          "authorization header must start with Bearer followed by token",
        ),
      );

    const token = header.split(" ")[1];

    if (!token)
      return next(
        APIError.unauthorized("authorization header must contain a token"),
      );

    const user = verifyUserToken(token);

    // @ts-ignore
    req.user = user;
    next();
  };
}

export function restrictToAuthenticated() {
  return function (req: Request, res: Response, next: NextFunction) {
    // @ts-ignore
    if (!req.user) {
      return next(
        APIError.unauthorized("You must be logged in to access this resource"),
      );
    }
    next();
  };
}
