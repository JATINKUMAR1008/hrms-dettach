import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
const PLATFORMS = [
  {
    icon: <FaLinkedinIn size={20} className="text-neutral-600" />,
    name: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={20} className="text-neutral-600" />,
    name: "Twitter",
  },
  {
    icon: <FaRedditAlien size={20} className="text-neutral-600" />,
    name: "Reddit",
  },
  {
    icon: <FaThreads size={20} className="text-neutral-600" />,
    name: "Stack Overflow",
  },
];
const LINKLIST = [
  {
    title: "Product",
    list: [
      {
        name: "Features",
        link: "/",
      },
      {
        name: "People",
        link: "/",
      },
      {
        name: "Payroll",
        link: "/",
      },
      {
        name: "Benefits",
        link: "/",
      },
      {
        name: "Payments",
        link: "/",
      },
      {
        name: "Time Off",
        link: "/",
      },
      {
        name: "Devices",
        link: "/",
      },
    ],
  },
  {
    title: "Resources",
    list: [
      {
        name: "Pricing",
        link: "/",
      },
      {
        name: "Knowledge",
        link: "/",
      },
      {
        name: "Case Studies",
        link: "/",
      },
      {
        name: "About Us",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
    ],
  },
  {
    title: "Company",
    list: [
      {
        name: "About",
        link: "/",
      },
      {
        name: "Careers",
        link: "/",
      },
      {
        name: "Contact",
        link: "/",
      },
    ],
  },
  {
    title: "Legal",
    list: [
      {
        name: "Privacy",
        link: "/",
      },
      {
        name: "Terms",
        link: "/",
      },
      {
        name: "Security",
        link: "/",
      },
    ],
  },
];
export const Footer = () => {
  return (
    <div className="max-w-[1500px] m-auto">
      <div className="w-full pt-20 pb-10 lg:px-24 flex lg:flex-row flex-col items-center lg:items-start justify-between ">
        <div className="flex flex-col lg:mr-20">
          <h1 className="xl:text-3xl lg:text-2xl text-xl  text-new-primary font-[900] italic font-popins drop-shadow-md  *:">
            hrms.dev
          </h1>
          <div className="mt-8 flex item-center gap-5">
            {PLATFORMS.map((item, index) => (
              <div
                className="w-12 h-12 bg-neutral-200 flex items-center justify-center rounded-full"
                key={index}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-5 bg-neutral-200 w-full lg:hidden" />
        <div className="flex flex-wrap w-full justify-stretch xl:gap-20 lg:gap-10 gap-5">
          {LINKLIST.map((item, index) => (
            <LinksRenderer key={index} title={item.title} list={item.list} />
          ))}
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-2 items-center justify-between py-10">
        <p className="text-neutral-500 lg:text-lg md:text-base text-sm font-medium">
          © 2024 HRMS.dev. All rights reserved
        </p>
        <p className="text-neutral-500 lg:text-lg md:text-base text-sm font-medium">
          Privacy Policy | Terms of Service
        </p>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-new-primary rounded-full"></div>
          <p className="text-base text-new-primary">All system normal</p>
        </div>
      </div>
    </div>
  );
};

const LinksRenderer = ({
  title,
  list,
}: {
  title: string;
  list: {
    link: string;
    name: string;
  }[];
}) => {
  return (
    <div className="border-l-2 px-8  border-neutral-200  my-5">
      <h3 className="text-lg lg:text-xl mb-5 font-bold text-neutral-800">
        {title}
      </h3>
      <ul className="list-none text-lg text-neutral-500">
        {list.map((item, index) => (
          <li key={index} className="my-3 cursor-pointer">
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
