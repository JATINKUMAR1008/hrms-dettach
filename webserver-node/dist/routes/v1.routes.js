"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = require("express");
const auth_routes_1 = require("./auth.routes");
const company_routes_1 = require("./company.routes");
exports.v1Router = (0, express_1.Router)();
exports.v1Router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
exports.v1Router.use("/auth", auth_routes_1.authRouter);
exports.v1Router.use("/company", company_routes_1.companyRouter);
