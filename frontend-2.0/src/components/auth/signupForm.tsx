"use client"
import Link from "next/dist/client/link";
import { Button } from "../commons/button";
import { useForm, SubmitHandler } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "@/states/hooks";
import { login } from "@/states/slices/auth";
const fomrSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
    });

export default function SignUpForm(
   
) {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(fomrSchema),
      });
      const onSubmitHandler = (data:any) => {
        console.log({ data });
        dispatch(login(data))
        reset();
      };
  return (
    <form className="w-full h-full mt-10" onSubmit={handleSubmit(onSubmitHandler)}>
      <span className="flex flex-col  border-b-2 border-neutral-400 ">
        <label
          htmlFor="email"
          className="text-xl font-semibold font-popins px-2 text-neutral-600"
        >
          Email
        </label>
        <input
          {...register("email")}
          className="px-1 py-1 mt-1 focus:py-3 focus:mt-0 outline-none duration-100 ease-in-out"
        />
      </span>
        <p className="text-xs text-red-400">{errors.email?.message}</p>
      <span className="flex flex-col mt-10  border-b-2 border-neutral-400 ">
        <label
          htmlFor="password"
          className="text-xl font-semibold font-popins px-2 text-neutral-600"
        >
          Password
        </label>
        <input
          {...register("password")}
          className="px-1 py-1 mt-1 focus:py-3 focus:mt-0 outline-none duration-100 ease-in-out"
        />
      </span>
        <p className="text-xs text-red-400">{errors.password?.message}</p>
      <Button
        type="solid"
        buttonType="submit"
        className="w-full text-neutral-50 font-bold mt-5 font-popins font-xl py-3 bg-neutral-950"
      >
        SignIn in your account
      </Button>
      <p className="mt-3 text-neutral-500 text-center">
        Don't have an account?{" "}
        <Link href="/" className="text-new-primary hover:underline">
          Sign up now
        </Link>
      </p>
    </form>
  );
}
