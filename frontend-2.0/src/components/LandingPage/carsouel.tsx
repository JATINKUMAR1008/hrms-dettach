import { FaRegCheckCircle } from "react-icons/fa";
const MENUOPTONS = [
  {
    title: "People centric",
    description:
      "Create a better employee experience by building your people operations systems and processes around your people.",
    features: [
      "employee self-service",
      "communication and collaboration",
      "performance Management",
    ],
  },
  {
    title: "Payroll",
    description:
      "Simplify your payroll process and ensure accurate and timely payroll to your employees.",
    features: [
      "payroll processing",
      "tax computation",
      "salary disbursement",
      "payroll reports",
    ],
  },
  {
    title: "Performance Management",
    description:
      "Track and improve employee performance with continuous feedback and recognition.",
    features: [
      "goal setting",
      "performance reviews",
      "360-degree feedback",
      "succession planning",
    ],
  },
];
export const Carsouel = () => {
  return (
    <div className="max-w-[1500px] m-auto h-[600px]  overflow-x-auto relative">
      <div className="flex items-center justify-center w-max text-neutral-950 gap-10 ">
        {MENUOPTONS.map((item, index) => (
          <div
            className="w-[1500px] flex flex-col text-center items-center flex-grow-0 p-10 m-auto"
            key={index}
          >
            <h1 className="text-4xl font-roboto font-bold outline w-fit rounded-full mt-10 px-10 py-5">
              {item.title}
            </h1>
            <p className="text-2xl mt-10 max-w-[70%] font-medium text-neutral-600 font-popins">
              {item.description}
            </p>
            <div className="flex flex-wrap w-full mt-16 items-center">
              {item.features.map((feat, index) => (
                <span className="m-auto flex gap-4 items-center" key={index}>
                  <FaRegCheckCircle size={25} className="text-green-600" />{" "}
                  <p className="text-neutral-700 text-xl font-medium font-popins">
                    {feat}
                  </p>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
