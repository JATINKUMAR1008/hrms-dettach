import { Schema, model } from "mongoose";
import { Model } from "mongoose";

export interface CompanyDataPayload {
  company_name: string;
  company_address: string;
  company_established: Date;
  company_employees: number;
  company_origin: string;
  company_website: string;
}

const CompanyDataSchema = new Schema(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const CompanyDataModel: Model<CompanyDataPayload> =
  model<CompanyDataPayload>("CompanyDataModel", CompanyDataSchema);
