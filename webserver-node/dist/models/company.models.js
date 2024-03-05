"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDataModel = void 0;
const mongoose_1 = require("mongoose");
const CompanyDataSchema = new mongoose_1.Schema({
    company_name: {
        type: String,
        required: true,
    },
    company_address: {
        type: String,
        required: true,
    },
    company_established: {
        type: Date,
        required: true,
    },
    company_employees: {
        type: Number,
        required: true,
    },
    company_origin: {
        type: String,
        required: true,
    },
    company_website: {
        type: String,
        required: false,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.CompanyDataModel = (0, mongoose_1.model)("Company_data", CompanyDataSchema);
