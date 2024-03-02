import { Request, Response } from "express";
import { userDataModel } from "../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { user_password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(
      user_password,
      Number(process.env.SALT_ROUNDS)
    );
    const userData = { ...rest, user_password: hashedPassword };
    const user = new userDataModel(userData);
    await user.save();
    res.status(201).json({
      status: true,
      message: "User created successfully!",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { user_email, user_password } = req.body;
    const user = await userDataModel.findOne({ user_email: user_email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(
      user_password,
      user.user_password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET || "", {
      expiresIn: "1w",
    });
    await userDataModel.findByIdAndUpdate(
      { _id: user._id },
      {
        refresh_token: token,
      }
    );
    res.status(200).json({ access_token: token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
