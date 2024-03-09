import { BsPeopleFill } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
const DATA=[
    {
        icon: <BsPeopleFill size={50} className="text-green-800"/>,
        desc: "Congratulations! You have successfully onboarded 5 new employees this month."
    },
    {
        icon: <IoStatsChartSharp size={50} className="text-new-primary"/>,
        desc: "Your employee engagement score has increased by 10% this quarter."
    },{
        icon: <IoIosWarning size={50} className="text-red-700"/>,
        desc: "You have 3 employees with overdue certifications."
    }
]
export const KeyFeature = () => {
    return(
        <div className="w-full flex flex-col px-3 items-center">
            <h1 className="xl:text-4xl lg:text-3xl text-2xl font-extrabold text-neutral-800 font-roboto">
                Data Driven
            </h1>
            <p className="max-w-[800px]  mt-2 w-full mb-20 text-neutral-500 lg:text-2xl md:text-lg text-base font-medium text-center">
                Get real-time insights into your workforce, headcounts costs, device fleet security and toll stack to make better decisions.
            </p>
            <div className="w-full px-4 flex lg:flex-row lg:gap-5 flex-col items-center justify-center">
            {DATA.map((data,index)=>(
                <div className="max-w-[500px] px-5 py-3 flex gap-5 items-center mb-5  outline outline-neutral-200 rounded-2xl" key={index}>
                    {data.icon}
                    <p className="lg:text-xl md:text-lg text-base font-medium text-neutral-500">{data.desc}</p>
                </div>
            ))}
            </div>
        </div>
    )
}