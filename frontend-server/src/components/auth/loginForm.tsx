import Link from "next/link";
import { Button } from "../commons/button";

interface IProps {
  type: "employee" | "admin";
}
export default function LoginForm({ type }: IProps) {
  return type === "admin" ? (
    <div>
      <div className="mt-7  flex flex-col">
        <span className="flex flex-col items-start gap-2">
          <label className="text-black font-bold col-span-1 text-xs md:text-md lg:text-lg">
            Full Name
          </label>
          <input
            className="bg-gray-200 lg:px-6 lg:py-7 py-2 px-3 text-xs md:text-md w-full rounded-md"
            placeholder="Enter Name"
          />
        </span>
        <span className="flex my-5 flex-col items-start gap-2">
          <label className="text-black capitalize font-bold col-span-1 text-xs md:text-md lg:text-lg">
            password
          </label>
          <input
            className="bg-gray-200 lg:px-6 lg:py-7 py-2 px-3 text-xs md:text-md w-full rounded-md"
            placeholder="Enter Password"
            type="password"
          />
        </span>
        <span className="my-5">
          <Link
            href="/auth/forgot-password"
            className="text-sm md:text-lg text-blue-500 underline"
          >
            Forgot Password?
          </Link>
        </span>
        <Button
          type="submit"
          className="lg:px-6 lg:py-7 py-2 px-3 font-popins font-bold text-xl"
        >
          LogIn
        </Button>
      </div>
    </div>
  ) : (
    <div className="mt-7  flex flex-col">
      <span className="flex flex-col items-start gap-2">
        <label className="text-black font-bold col-span-1 text-xs md:text-md lg:text-lg">
          Full Name
        </label>
        <input
          className="bg-gray-200 lg:px-6 lg:py-7 py-2 px-3 text-xs md:text-md w-full"
          placeholder="Enter Name"
        />
      </span>
      <span className="flex my-5 flex-col items-start gap-2">
        <label className="text-black capitalize font-bold col-span-1 text-xs md:text-md lg:text-lg">
          password
        </label>
        <input
          className="bg-gray-200 lg:px-6 lg:py-7 py-2 px-3 text-xs md:text-md w-full"
          placeholder="Enter Password"
          type="password"
        />
      </span>
      <span className="my-5">
        <Link
          href="/auth/forgot-password"
          className="text-sm md:text-lg text-blue-500 underline"
        >
          Forgot Password?
        </Link>
      </span>
      <Button
        type="submit"
        className="lg:px-6 lg:py-7 py-2 px-3 font-popins font-bold text-xl"
      >
        LogIn
      </Button>
    </div>
  );
}
