import { Carsouel } from "@/components/LandingPage/carsouel";
import { ClusteredCard } from "@/components/LandingPage/clusterCard";
import { LandingPageNavbar } from "@/components/LandingPage/landingNavbar";
import { Button } from "@/components/commons/button";
import { Butcherman } from "next/font/google";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
export default function Home() {
  return (
    <>
      <LandingPageNavbar />
      <section className="w-full py-24 my-10 px-20 text-center h-fit">
        <h3 className="text-6xl font-[600] mb-3 font-roboto text-neutral-800">
          Give your worker a platform
        </h3>
        <p className="text-xl font-medium font-popins text-neutral-500">
          Build a growth-oriented culture with a modern HR platform.
        </p>
        <Button
          type="outlined"
          className="mt-10 text-new-primary outline-new-primary font-[600] px-5 shadow-2xl shadow-indigo-600"
        >
          <span className="flex gap-3 items-center">
            30 days trail
            <GoArrowUpRight size={20} />
          </span>
        </Button>
      </section>
      <section className="my-10">
        <ClusteredCard />
      </section>
      <section className="my-20">
        <Carsouel />
      </section>
    </>
  );
}
