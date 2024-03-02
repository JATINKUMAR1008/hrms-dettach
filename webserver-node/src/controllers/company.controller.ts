import { CompanyDataModel } from "../models/company.models";
import { Request, Response } from "express";
export const registerCompany = async (req: Request, res: Response) => {
  try {
    const companyData = req.body;
    const company = new CompanyDataModel(companyData);
    await company.save();
    res.status(201).json(company);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
