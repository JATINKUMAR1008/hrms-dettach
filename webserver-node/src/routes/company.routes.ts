import { Router } from "express";
import { isAdmin, validateToken } from "../middlewares/auth.middleware";
import { registerCompany } from "../controllers/company.controller";
export const companyRouter = Router();

companyRouter.use(validateToken);

companyRouter.post("/register", isAdmin, registerCompany);
