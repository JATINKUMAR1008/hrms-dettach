import { Router } from "express";
import { authRouter } from "./auth.routes";
import { companyRouter } from "./company.routes";
export const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/company', companyRouter);