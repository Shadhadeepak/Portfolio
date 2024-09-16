"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import shadha from '../image/ai.png'
import jg from '../image/jg.png'
import she from '../image/she.png'
import w from '../image/w.png'

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "PerpWise  Interviewer",
    desc: "Built a mock interview platform using Next.js and Gemini AI to simulate realistic interview scenarios and provide real-time feedback. Integrated React.js, Clerk for authentication, and PostgreSQL for data management, delivering a seamless and scalable user experience.",
    img: shadha,
    link: "https://shadha-ai-interview-mocker.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "JG Tax  Website",
    desc: "Developed a professional landing page for JG Tax Consultant using Next.js and Tailwind CSS, featuring scroll animations and dynamic sections. Integrated EmailJS for client communications and Google Maps for location display, ensuring a responsive and engaging user experience.",
    img: jg,
    link: "https://jgtaxconsultancy.netlify.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "SHADE E-Commerce",
    desc: "Created the SHADE eCommerce platform using Next.js, React.js, and Tailwind CSS for a seamless shopping experience. Integrated Wix headless backend and JavaScript SDK for efficient data handling and authentication, ensuring a responsive and user-friendly interface",
    img:she,
    link: "https://github.com/Shadhadeepak/ecommerce-project",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Weather App ",
    desc: "Developed a weather application using React and a Weather API to provide real-time weather updates. Designed a clean, user-friendly interface for easy access to weather information and forecasts..",
    img: w,
    link: "https://weather-471pn6bw4-shadhadeepaks-projects.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex ">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} pt-10 pb-2`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white  ">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end items-start mt-[-3rem] ">
                    <button className="p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <div className="">

          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;