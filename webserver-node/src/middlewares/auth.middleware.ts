import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { userDataModel } from "../models/user.model";
export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token_string = req.headers.authorization;
  if (!token_string) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const [bearer, token] = token_string.split(" ");
  if (bearer !== "Bearer") {
    return res.status(401).json({ message: "Invalid token" });
  }
  if (!token) {
    return res.status(401).json({ message: "No Token Found" });
  }
  jwt.verify(token, process.env.JWT_SECRET || "", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.body.user_id = (decoded as { sub: string }).sub;
    next();
  });
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user_id = req.body.user_id;
  const user = await userDataModel.findById(user_id).select("user_isAdmin");
  if (user?.user_isAdmin) {
    next();
  }
  return res.status(401).json({ message: "Unauthorized" });
};
