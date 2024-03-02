"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataModel = void 0;
const mongoose_1 = require("mongoose");
const userDataSchema = new mongoose_1.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_password: {
        type: String,
        required: true,
    },
    user_isAdmin: {
        type: Boolean,
        default: false,
    },
    user_isVerified: {
        type: Boolean,
        default: false,
    },
    refresh_token: {
        type: String,
        required: false,
        default: "",
    },
}, {
    timestamps: true,
});
exports.userDataModel = (0, mongoose_1.model)("userDataModel", userDataSchema);
