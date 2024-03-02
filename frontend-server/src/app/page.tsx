import Image from "next/image";
import office_img from "../../public/pexels-marc-mueller-380768.jpg";
import img_1 from "../../public/10032884.jpg";
import img_2 from "../../public/10032888.jpg";
import img_3 from "../../public/3644996.jpg";
import img_4 from "../../public/3650409.jpg";
import { Button } from "@/components/commons/button";
import logo_1 from "../../public/airbnb-2-logo-svgrepo-com.svg";
import logo_2 from "../../public/google-icon-logo-svgrepo-com.svg";
import logo_3 from "../../public/mcdonald-s-15-logo-svgrepo-com.svg";
import logo_4 from "../../public/microsoft-logo-svgrepo-com.svg";
import logo_5 from "../../public/under-armour-logo-svgrepo-com.svg";
import logo_6 from "../../public/slack-logo-svgrepo-com.svg";
import Link from "next/link";
import social_1 from "../../public/facebook-svgrepo-com.svg";
import social_3 from "../../public/linkedin-svgrepo-com (1).svg";
import social_4 from "../../public/twitter-svgrepo-com (1).svg";
const keyfetaures = [
  {
    title: "Employee management",
    desc: "Manage all your employee data in one place, from personal details to salary information.",
    img: img_1,
  },
  {
    title: "Time Tracking",
    desc: "Track your employees' time and attendance with ease. Say goodbye to manual timesheets.",
    img: img_2,
  },
  {
    title: "Benefits administaration",
    desc: "Manage your employee benefits and perks in one place. From health insurance to retirement plans.",
    img: img_3,
  },
  {
    title: "Payroll processing",
    desc: "Automate your payroll process and ensure your employees are paid accurately and on time.",
    img: img_4,
  },
];

const LogoArray = [
  {
    img: logo_1,
  },
  {
    img: logo_2,
  },
  {
    img: logo_3,
  },
  {
    img: logo_4,
  },
  {
    img: logo_5,
  },
  {
    img: logo_6,
  },
];
const socialmedia = [
  {
    img: social_1,
  },

  {
    img: social_3,
  },
  {
    img: social_4,
  },
];
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10 max-w-[1500px] m-auto">
        <section className="h-full flex items-center justify-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 w-full mb-[10%]">
            <Image
              src={office_img}
              alt="office img"
              className="rounded-lg md:w-[50%] w-full h-[50%] object-cover"
            />
            <div className="flex flex-col md:w-[45%] w-full h-full">
              <div className="w-full">
                <h1 className="md:text-6xl text-3xl font-[900] font-montserrat">
                  The best HRMS for
                  <br /> your team
                </h1>
                <p className="md:text-xl text-md md:max-w-[80%] mt-5 font-popins text-gray-700">
                  Empower your team with a modern HRMS that automates and
                  simplifies your people operations
                </p>
              </div>
              <div className="flex flex-row gap-5 mt-10">
                <Button
                  type="button"
                  className="md:text-xl text-md font-popins md:px-8 md:py-4 py-2 px-4"
                >
                  Sing In
                </Button>
                <Button
                  type="button"
                  className="md:text-xl font-popins md:px-8 md:py-4 py-2 px-4  bg-gray-400"
                >
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="text-left w-full py-10">
          <h1 className="md:text-5xl text-3xl font-[900] font-montserrat md:max-w-[80%]">
            All-in-one HRMS to streamline your people operations
          </h1>
          <p className="md:text-2xl text-xl font-popins text-gray-700 mt-5">
            From hiring to retiring and everything in between, Workwise has you
            covered. Explore our alli-in-one solution.
          </p>
          <div className="flex md:flex-row flex-col mt-10 w-full h-full gap-5  items-start">
            {keyfetaures.map((feature, index) => (
              <div key={index} className="md:w-[25%]  m-auto h-full">
                <Image
                  src={feature.img}
                  alt="feature img"
                  className="object-cover rounded-md"
                />
                <h1 className="text-lg font-popins font-semibold mt-2">
                  {feature.title}
                </h1>
                <p className="text-sm font-popins mt-1 text-gray-700">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-[900] text-black mt-[7rem] font-montserrat">
              Trusted by companies of all shapes and sizes
            </h1>
            <div className="mt-20 w-full flex flex-row gap-5 flex-wrap">
              {LogoArray.map((logo, index) => (
                <div className="m-auto" key={index}>
                  <Image
                    src={logo.img}
                    alt="logo img"
                    width={100}
                    height={100}
                    className="object-cover rounded-md "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="text-center py-20 mt-20">
          <h1 className="text-3xl font-[900] font-montserrat">
            Ready to transform your HR?
          </h1>
          <p className="text-lg font-popins text-gray-600 mt-4">
            Discover how Workwise can help you attract, retain, and manage top
            talent.
          </p>
          <div className="w-full flex flex-row mt-10 md:max-w-[60%] justify-between m-auto">
            <Button
              type="button"
              className="md:text-xl text-sm md:px-7 py-3 px-4 font-montserrat font-[900]"
            >
              Get Started
            </Button>
            <Button
              type="button"
              className="bg-gray-400  md:text-xl text-sm font-montserrat font-[900] text-black"
            >
              Request a demo
            </Button>
          </div>
        </section>
        <section className="bg-gray-100 py-10 rounded-sm w-full text-center px-10 my-20">
          <h1 className="text-black font-montserrat font-[900] text-4xl">
            Reach us out
          </h1>
          <div className="w-full grid grid-cols-2 gap-6 mt-10">
            <span className="flex flex-col items-start gap-2">
              <label className="text-black font-bold col-span-1">
                Full Name
              </label>
              <input
                className="bg-gray-200 px-6 py-7 w-full"
                placeholder="Enter Name"
              />
            </span>
            <span className="flex flex-col items-start gap-2">
              <label className="text-black font-bold col-span-1">
                Email Address
              </label>
              <input
                className="bg-gray-200 px-6 py-7 w-full"
                placeholder="Enter Email Address"
              />
            </span>
            <span className="flex flex-col items-start gap-2">
              <label className="text-black font-bold col-span-1">
                Phone Number
              </label>
              <input
                className="bg-gray-200 px-6 py-7 w-full"
                placeholder="Enter Phone Number"
              />
            </span>
            <span className="flex flex-col items-start gap-2">
              <label className="text-black font-bold col-span-1">Subject</label>
              <input
                className="bg-gray-200 px-6 py-7 w-full"
                placeholder="Enter Subject"
              />
            </span>
            <span className="flex flex-col items-start gap-2 col-span-2">
              <label className="text-black font-bold col-span-1">Message</label>
              <textarea
                className="bg-gray-200 px-6 py-7 w-full"
                placeholder="Enter Message"
                rows={15}
              ></textarea>
            </span>
          </div>
          <Button
            type="submit"
            className="text-xl mt-10 font-montserrat font-extrabold px-7 py-4"
          >
            Send Message
          </Button>
        </section>
      </main>
      <footer className="w-full pt-20 pb-10 bg-gray-800 mt-20 px-20 rounded-sm relative">
        <div className="flex flex-row justify-evenly items-center">
          <div>
            <h1 className="text-gray-100 text-6xl font-[900] font-montserrat">
              hrms.dev
            </h1>
            <p className="text-md mt-2 text-gray-300 max-w-[300px]">
              Empower your team with a modern HRMS that automates and simplifies
              your people operations
            </p>
          </div>
          <div>
            <h1 className="text-gray-100 text-3xl font-[900] font-popins uppercase">
              Follow us
            </h1>
            <div className="flex flex-row mt-5">
              {socialmedia.map((social, index) => (
                <div key={index} className="m-auto">
                  <Image
                    src={social.img}
                    alt="social img"
                    width={50}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-gray-100 text-3xl font-[900] font-popins uppercase">
              Call Us
            </h1>
            <p className="font-[900] font-montserrat text-6xl text-gray-100">
              +1 234 567 890
            </p>
          </div>
        </div>
        <hr className="w-full bg-gray-100 h-[1px] mt-20"/>
        <div className=" text-gray-200  text-xl font-[900] mt-10 flex justify-between">
          <p>Copyright © 2024 hrms.dev Inc. All right reserved</p>
        </div>
      </footer>
    </>
  );
}
