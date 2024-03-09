import { Carsouel } from "@/components/LandingPage/carsouel";
import { ClusteredCard } from "@/components/LandingPage/clusterCard";
import { Footer } from "@/components/LandingPage/footer";
import { IntegrationAccord } from "@/components/LandingPage/integrationAccord";
import { KeyFeature } from "@/components/LandingPage/keyFeature";
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
      <section className="my-20 py-10 w-full text-center">
        <h1 className="xl:text-4xl lg:text-3xl text-2xl font-extrabold font-roboto text-neutral-800
        "> Integration Capabilities </h1>
        <p className="lg:text-2xl md:text-lg text-base mt-2 mb-10 font-medium text-neutral-500">Streamline your HR operations by seamlessly integrating our HR <br/>mobile app with your exisiting systems.</p>
        <div className="w-full m-auto max-w-[1500px] grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1">
          <IntegrationAccord/>
          </div>
        </div>
      </section>
      <section className="my-20 w-full"> <KeyFeature/> </section>
      <footer className="w-full bg-[#F5F7F9]">
        <Footer/>
      </footer>
    </>
  );
}
