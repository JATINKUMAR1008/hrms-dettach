import { Model, Schema, model } from "mongoose";

export interface UserDataPayload {
  user_name: string;
  user_email: string;
  user_password: string;
  user_isAdmin: boolean;
  user_isVerified: boolean;
}

const userDataSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const userDataModel: Model<UserDataPayload> = model<UserDataPayload>(
  "User_data",
  userDataSchema
);
