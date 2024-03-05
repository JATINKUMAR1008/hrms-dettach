import { Request, Response, Router, NextFunction } from "express";
import { authRouter } from "./auth.routes";
import { companyRouter } from "./company.routes";
export const v1Router = Router();
v1Router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
v1Router.use("/auth", authRouter);
v1Router.use("/company", companyRouter);
