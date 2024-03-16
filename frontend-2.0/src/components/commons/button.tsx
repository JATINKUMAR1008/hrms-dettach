import React from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  type: "outlined" | "solid";
  className?: string;
  buttonType?: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}
export const Button = ({ type, className, onClick, children ,buttonType}: IProps) => {
  return (
    <button
      className={twMerge(
        type === "outlined"
          ? "text-lg font-popins outline outline-neutral-200 outline-2 py-2 px-3 rounded-md text-neutral-800 shadow-md"
          : "bg-[#3545BE] text-lg font-popins  py-2 px-3 rounded-md text-neutral-800",
        className
      )}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  );
};
