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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { user_password } = _a, rest = __rest(_a, ["user_password"]);
        const hashedPassword = yield bcrypt_1.default.hash(user_password, Number(process.env.SALT_ROUNDS));
        const userData = Object.assign(Object.assign({}, rest), { user_password: hashedPassword });
        const user = new user_model_1.userDataModel(userData);
        yield user.save();
        res.status(201).json({
            status: true,
            message: "User created successfully!",
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password } = req.body;
        const user = yield user_model_1.userDataModel.findOne({ user_email: user_email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(user_password, user.user_password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ sub: user._id }, process.env.JWT_SECRET || "", {
            expiresIn: "1w",
        });
        yield user_model_1.userDataModel.findByIdAndUpdate({ _id: user._id }, {
            refresh_token: token,
        });
        res.status(200).json({ access_token: token });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
