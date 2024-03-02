"use client";
import Image from "next/image";
import side_img_1 from "../../../public/pexels-pew-nguyen-244133.jpg";
import LoginForm from "./loginForm";
import { useState } from "react";
import ModalBox from "../commons/modalBox";
export default function LoginModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isEmployee, setIsEmployee] = useState(true);
  return (
    isOpen && (
      <ModalBox onClose={() => setIsOpen(false)}>
        <div className="max-w-[1500px]  m-auto md:p-24 p-5 w-full flex items-center justify-center">
          <div className="bg-gray-100 w-full p-3 grid grid-cols-2 md:max-w-[80%] gap-5 rounded-md">
            <Image
              src={side_img_1}
              alt="side_img_1"
              className="object-cover rounded-md max-h-[600px] hidden md:block"
            />
            <div className="w-full py-5 col-span-2 md:col-span-1">
              <div className="grid grid-cols-2 h-fit rounded-lg w-fit shadow-md ">
                <div
                  className={
                    isEmployee
                      ? "w-full h-full p-3 rounded-lg text-gray-100 bg-gray-400 cursor-pointer duration-75 ease-in-out"
                      : "w-full duration-75 ease-in-out h-full p-3 rounded-lg cursor-pointer text-gray-600"
                  }
                  onClick={() => setIsEmployee(true)}
                >
                  <p className="text-center  w-full h-full  font-popins font-bold">
                    Employee
                  </p>
                </div>
                <div
                  className={
                    !isEmployee
                      ? "w-full h-full p-3 rounded-lg text-gray-100 bg-gray-400 cursor-pointer duration-75 ease-in-out"
                      : "w-full duration-75 ease-in-out h-full p-3 rounded-lg cursor-pointer text-gray-600"
                  }
                  onClick={() => setIsEmployee(false)}
                >
                  <p className="text-center  w-full h-full font-popins font-bold">
                    Admin
                  </p>
                </div>
              </div>
              {isEmployee ? (
                <div className="p-3 w-full h-full ">
                  <h1 className="text-2xl mt-2 font-bold font-popins capitalize">
                    SignIn as employee
                  </h1>
                  <LoginForm type="employee" />
                </div>
              ) : (
                <div className="w-full h-full p-3 rounded-lg cursor-pointer duration-75 ease-in-out">
                  <h1 className="text-2xl mt-2 font-bold font-popins capitalize">
                    SignIn as admin
                  </h1>
                  <LoginForm type="admin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </ModalBox>
    )
  );
}
