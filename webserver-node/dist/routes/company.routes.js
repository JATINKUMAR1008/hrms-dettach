"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const company_controller_1 = require("../controllers/company.controller");
exports.companyRouter = (0, express_1.Router)();
exports.companyRouter.use(auth_middleware_1.validateToken);
exports.companyRouter.post("/register", auth_middleware_1.isAdmin, company_controller_1.registerCompany);
