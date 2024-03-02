"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", (req, res) => {
    res.send("Login route");
});
authRouter.post("/register", auth_controller_1.registerUser);
