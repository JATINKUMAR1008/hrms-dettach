"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const validateToken = (req, res, next) => {
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
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "", (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.body.user_id = decoded.sub;
        next();
    });
};
exports.validateToken = validateToken;
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = req.body.user_id;
    const user = yield user_model_1.userDataModel.findById(user_id).select("user_isAdmin");
    if (user === null || user === void 0 ? void 0 : user.user_isAdmin) {
        next();
    }
    return res.status(401).json({ message: "Unauthorized" });
});
exports.isAdmin = isAdmin;
