import mongoose, { ConnectOptions } from "mongoose";

export const dbConnector = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI || "").then(() => {
      console.log("Connected to the database");
    });
  } catch (error) {
    console.log(error);
  }
};
