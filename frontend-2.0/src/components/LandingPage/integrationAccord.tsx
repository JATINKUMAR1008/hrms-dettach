"use client"
import Link from "next/link";
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
const ACCORDDATA = [
    {
        title: "Overview Integration",
        description: "Our HR mobile app can be easily integrated with your existing HRMS, Payroll, and other systems to provide a seamless experience for your employees."

    },
    {
        title: "Payroll Integration",
        description: "Our HR mobile app can be easily integrated with your existing HRMS, Payroll, and other systems to provide a seamless experience for your employees."
    },
    {
        title: "Seamless Data Exchange",
        description: "Our HR mobile app can be easily integrated with your existing HRMS, Payroll, and other systems to provide a seamless experience for your employees."
    },
    {
        title: "Custom Integration",
        description: "Our HR mobile app can be easily integrated with your existing HRMS, Payroll, and other systems to provide a seamless experience for your employees."
    },
    {
        title: "Supported Integrations",
        description: "Our HR mobile app can be easily integrated with your existing HRMS, Payroll, and other systems to provide a seamless experience for your employees." 
    }
]
export const IntegrationAccord = () => {
    
    return(
        <div className="flex flex-col lg:px-10 px-5 mt-10">
            {
                ACCORDDATA.map((data,index)=>(
                    <Accordian key={index} title={data.title} description={data.description} />
                ))
            }
        </div>
    )
}

const Accordian = ({title, description}:{
    title: string,
    description: string
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="w-full border-b-2 border-neutral-200 py-8">
            <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold text-neutral-800">{title}</h1>
                <button className="text-neutral-700" onClick={()=>setIsOpen(!isOpen)}><MdKeyboardArrowDown size={25} className={isOpen?"rotate-180 duration-75 ease-in-out":"rotate-0 duration-75 ease-in-out"}/></button>
            </div>
            {isOpen && <ShowDetails description={description}/> }
        </div>
    )
}
const ShowDetails = ({description}:{description: string}) => {
    return(
        <div className="w-full text-left mt-5 duration-75 ease-in-out">
            <p className="xl:text-xl text-base font-medium text-neutral-500 pr-2">{description}</p>
            <Link href="/" className="text-new-primary font-medium hover:underline flex lg:text-xl md:text-lg text-base items-center gap-3 mt-10">Read more <IoArrowForwardOutline size={25}/></Link>
        </div>
    )
}