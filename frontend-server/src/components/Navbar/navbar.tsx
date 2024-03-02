"use client";
import Image from "next/image";
import building_svg from "../../../public/office-block-building-svgrepo-com.svg";
import { Button } from "../commons/button";
import menu_button from "../../../public/menu-alt-2-svgrepo-com.svg";
import Link from "next/link";
import LoginModal from "../auth/loginModal";
import { useState } from "react";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:max-w-[1500px] flex flex-row px-5 w-full items-center p-6 justify-between md:m-auto ">
      <Link href="/" className="flex flex-row items-end gap-1">
        <h1 className="text-2xl font-[900] font-popins">{"hrms.dev"}</h1>
        <Image src={building_svg} alt="building" width={50} height={50} />
      </Link>
      <div className="block md:hidden">
        <Image src={menu_button} alt="menu" width={50} height={50} />
      </div>
      <div className="flex-row items-center gap-3 hidden md:flex">
        <Button type="button" className="font-bold" onClick={()=>setIsOpen(true)}>
          Log In
        </Button>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Button
          type="button"
          className="font-bold bg-transparent outline outline-1 text-black"
        >
          Request a demo
        </Button>
      </div>
    </div>
  );
}
