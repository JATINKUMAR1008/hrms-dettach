import { TbActivityHeartbeat } from "react-icons/tb";
import slack_icon from "../../../public/slack-svgrepo-com.svg";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../commons/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const leaveExample = [
  {
    "employee name": "Anastasia",
    dates: "30 Jun - 9 Jul",
    length: "9 Days",
    Type: "Wedding leave",
  },
];
import "react-circular-progressbar/dist/styles.css";
export const ClusteredCard = () => {
  return (
    <div className="w-full flex max-w-[1200px] justify-center m-auto relative pb-10 px-10 lg:px-0">
      <div className="rounded-lg border-[3px] max-w-[200px] max-h-[300px] border-neutral-200 py-2 px-5 shadow-neutral-shadow hidden lg:block">
        <TbActivityHeartbeat size={100} className="text-neutral-800" />
        <h3 className="text-lg font-medium font-popins text-neutral-500">
          Work accident insurance
        </h3>
        <p className="text-used-green mt-10 text-4xl font-medium pb-10">
          $3200
        </p>
      </div>
      <div className="rounded-lg outline outline-neutral-200 lg:ml-10 lg:py-10 py-5 lg:px-7 px-4">
        <Image src={slack_icon} alt="slack" width={50} height={50} />
        <div className="bg-neutral-100 text-neutral-600 lg:text-lg text-sm px-5 py-3 rounded-lg mt-5 max-w-[400px] font-medium">
          <h3>Hello Yasuo</h3>
          <p className="mt-1">
            Anastasia requested 5 days of Holidays,your approval is required.
          </p>
        </div>
        <div className="w-full max-w-[400px] mt-5">
          <div className="flex justify-between mt-3 md:text-lg text-sm font-medium">
            <p className=" text-neutral-600">Employee Name</p>
            <p className=" text-neutral-900">
              {leaveExample[0]["employee name"]}
            </p>
          </div>
          <div className="flex justify-between mt-3 md:text-lg text-sm font-medium">
            <p className=" text-neutral-600">Dates</p>
            <p className=" text-neutral-900">{leaveExample[0]["dates"]}</p>
          </div>
          <div className="flex justify-between mt-3 md:text-lg text-sm font-medium">
            <p className=" text-neutral-600">Length</p>
            <p className=" text-neutral-900">{leaveExample[0]["length"]}</p>
          </div>
          <div className="flex justify-between mt-3 md:text-lg text-sm font-medium">
            <p className=" text-neutral-600">Type</p>
            <p className=" text-neutral-900">{leaveExample[0]["Type"]}</p>
          </div>
        </div>
      </div>
      <div className="max-w-[300px] ml-10 w-full max-h-[250px] mt-[200px] outline outline-neutral-200 py-10 px-5 rounded-md shadow-neutral-shadow hidden lg:block">
        <div className="px-3 py-2 outline outline-neutral-200 flex rounded-md w-full text-xl font-medium text-neutral-700 items-center justify-between">
          Stripe <MdOutlineKeyboardArrowDown size={30} />
        </div>
        <div className="px-3 py-2 outline outline-neutral-200 mt-5 flex rounded-md w-full text-xl font-medium text-neutral-700 items-center justify-between">
          Schedule <MdOutlineKeyboardArrowDown size={30} />
        </div>
        <Button
          type="solid"
          className="w-full text-neutral-50 mt-5 text-xl font-medium shadow-md shadow-new-primary"
        >
          Pay
        </Button>
      </div>
      <div className="absolute px-5 rounded-md max-w-[350px] lg:w-full w-fit py-3 flex lg:right-[150px] bg-white lg:top-12 top-[85%] outline outline-neutral-200 shadow-neutral-shadow">
        <div className="lg:w-14 lg:h-14 w-10 h-10 bg-indigo-700 flex justify-center lg:text-2xl md:text-xl text-base font-extrabold items-center rounded-full">
          JK
        </div>
        <div className="lg:w-14 lg:h-14 w-10 h-10 relative right-6 outline bg-green-600 flex justify-center lg:text-2xl md:text-xl text-base font-extrabold items-center rounded-full">
          HS
        </div>
        <p className="lg:text-lg text-sm font-medium text-neutral-600 break-words max-w-[200px]">
          Kasandra {"'"}s take home increased by{" "}
          <span className="text-used-green font-extrabold">$430</span>
        </p>
      </div>
      <div className="absolute bg-neutral-50 left-0 max-w-[200px] outline outline-neutral-200">
        {/* <CircularProgressbar
          value={60}
          styles={buildStyles({
            pathColor: "#3545BE",
          })}
          text="w"
        /> */}
      </div>
    </div>
  );
};
