import Image from "next/image";
import building_svg from "../../../public/office-block-building-svgrepo-com.svg";
import { Button } from "../commons/button";
export function Navbar() {
  return (
    <div className="max-w-[1500px] flex flex-row px-5 items-center p-6 justify-between m-auto ">
      <div className="flex flex-row items-end gap-1">
        <h1 className="text-2xl font-[900] font-popins">{"hrms.dev"}</h1>
        <Image src={building_svg} alt="building" width={50} height={50} />
      </div>
      <div className="flex flex-row items-center gap-3">
        <Button type="button" className="font-bold">
          Log In
        </Button>
        <Button
          type="button"
          className="font-bold capitalize bg-transparent outline outline-1 text-black"
        >
          create account
        </Button>
      </div>
    </div>
  );
}
