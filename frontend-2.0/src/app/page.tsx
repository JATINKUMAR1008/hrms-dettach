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
      <section className="w-full lg:py-24 py-10 px-5 my-10 lg:px-20 text-center h-fit">
        <h3 className="lg:text-6xl text-3xl font-[600] mb-3 font-roboto text-neutral-800">
          Give your worker a platform
        </h3>
        <p className="lg:text-xl md:text-lg text-sm font-medium font-popins text-neutral-500">
          Build a growth-oriented culture with a modern HR platform.
        </p>
        <Button
          type="outlined"
          className="mt-10 text-new-primary outline-new-primary font-[600] px-5 shadow-2xl shadow-indigo-600"
        >
          <span className="flex gap-3 text-sm lg:text-lg items-center">
            30 days trail
            <GoArrowUpRight size={20} />
          </span>
        </Button>
      </section>
      <section className="my-10">
        <ClusteredCard />
      </section>
      <section className="my-20">
        <h1 className="mt-10 lg:text-4xl md:text-3xl text-2xl w-full font-roboto font-extrabold text-neutral-800 text-center flex items-center justify-center">
          • Features •
        </h1>
        <Carsouel />
      </section>
    </>
  );
}
