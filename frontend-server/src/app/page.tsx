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
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10 max-w-[1500px] m-auto">
      <section className="h-full flex items-center justify-center w-full">
        <div className="flex items-center justify-between w-full mb-[10%]">
          <Image
            src={office_img}
            alt="office img"
            className="rounded-lg w-[50%]"
          />
          <div className="flex flex-col w-[45%] h-full">
            <div>
              <h1 className="text-6xl font-extrabold font-montserrat">
                The best HRMS for
                <br /> your team
              </h1>
              <p className="text-xl max-w-[80%] mt-5 font-popins text-gray-700">
                Empower your team with a modern HRMS that automates and
                simplifies your people operations
              </p>
            </div>
            <div className="flex flex-row gap-5 mt-10">
              <Button type="button" className="text-xl font-popins py-4 px-8">
                Sing In
              </Button>
              <Button
                type="button"
                className="text-xl font-popins px-8 py-4  bg-gray-400"
              >
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-left w-full py-10">
        <h1 className="text-5xl font-[900] font-montserrat max-w-[80%]">
          All-in-one HRMS to streamline your people operations
        </h1>
        <p className="text-2xl font-popins text-gray-700 mt-5">
          From hiring to retiring and everything in between, Workwise has you
          covered. Explore our alli-in-one solution.
        </p>
        <div className="flex flex-row mt-7 w-full h-full gap-5 items-start">
          {keyfetaures.map((feature, index) => (
            <div key={index} className="w-[25%] m-auto h-full">
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
                Discover how Workwise can help you attract, retain, and manage top talent.
              </p>
              <div className="w-full flex flex-row mt-10 max-w-[60%] justify-between m-auto">
                <Button type="button" className="text-xl px-7 py-3 font-montserrat font-[900]">
                  Get Started
                </Button>
                <Button type="button" className="bg-gray-400  text-xl font-montserrat font-[900] text-black">
                  Request a demo
                </Button>
              </div>
      </section>
    </main>
  );
}
