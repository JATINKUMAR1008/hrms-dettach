"use client";
import { useEffect, useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Carousel as RCarousel } from "react-responsive-carousel";
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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export const Carsouel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   console.log(carousel?.offsetWidth);
  //   let scrollInterval = setInterval(() => {
  //     if (carousel) {
  //       carousel.scrollLeft += carousel.clientWidth / 2; // Adjust the scroll speed as needed
  //     }
  //   }, 2); // Adjust the interval duration as needed

  //   // When user interacts with the carousel, clear the interval
  //   // if (carousel) {
  //   //   carousel.addEventListener("mouseenter", () =>
  //   //     clearInterval(scrollInterval)
  //   //   );
  //   //   carousel.addEventListener("mouseleave", () => {
  //   //     scrollInterval = setInterval(() => {
  //   //       if (carousel) {
  //   //         carousel.scrollLeft += 2; // Adjust the scroll speed as needed
  //   //       }
  //   //     }, 2); // Adjust the interval duration as needed
  //   //   });
  //   // }

  //   return () => clearInterval(scrollInterval);
  // }, []);
  return (
    <div className="max-w-[1500px] m-auto  w-full">
      <RCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className=""
      >
        {MENUOPTONS.map((item, index) => (
          <div
            className="flex min-w-full flex-col text-center items-center  p-10 snap-center"
            key={index}
          >
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-roboto font-bold outline text-neutral-900  w-fit rounded-full mt-10 px-10 lg:py-5 py-3">
              {item.title}
            </h1>
            <p className="lg:text-2xl md:text-xl text-lg mt-10 lg:max-w-[70%] font-medium text-neutral-600 font-popins">
              {item.description}
            </p>
            <div className="flex md:flex-row flex-col md  :flex-wrap w-full mt-16 gap-5 md:items-center items-start justify-center">
              {item.features.map((feat, index) => (
                <span className="m-auto flex gap-4 items-center w-full md:w-fit" key={index}>
                  <FaRegCheckCircle size={25} className="text-green-600" />
                  <p className="text-neutral-700 lg:text-xl md:text-lg text-sm font-medium font-popins">
                    {feat}
                  </p>
                </span>
              ))}
            </div>
          </div>
        ))}
      </RCarousel>
    </div>
  );
};