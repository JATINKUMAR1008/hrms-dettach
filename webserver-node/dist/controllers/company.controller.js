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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCompany = void 0;
const company_models_1 = require("../models/company.models");
const registerCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyData = req.body;
        const company = new company_models_1.CompanyDataModel(companyData);
        yield company.save();
        return res.status(201).json(company);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.registerCompany = registerCompany;
