import { twMerge } from "tailwind-merge";

interface IProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ type, children, className, onClick }: IProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "bg-blue-500 text-white px-4 py-2 rounded-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
