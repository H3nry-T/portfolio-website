"use client";
import ContactMeModal from "@/components/ContactMeModal";
import { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import CustomSection from "./CustomSection";
import { services, skills } from "./constants";
import CustomHoverCard from "@/components/CustomHoverCard";
import SpotlightCard from "@/components/SpotlightCard";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const variants: Variants = {
    normal: {
      top: mousePosition.y - 9,
      left: mousePosition.x - 9,
    },
    hover: {
      top: mousePosition.y - 100,
      left: mousePosition.x - 100,
      width: "200px",
      height: "200px",
    },
  };

  useEffect(() => {
    function handleMouseMove(e: MouseEvent): void {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full min-h-screen mx-auto max-w-7xl ">
      {/* mouse cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-5 h-5 z-50 rounded-full bg-gray-300 mix-blend-difference pointer-events-none `}
        animate={isHovered ? "hover" : "normal"}
        transition={{
          duration: 0.1,
        }}
        variants={variants}
      ></motion.div>
      {/* mouse cursor */}
      <motion.section
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: "0.6" }}
        viewport={{ once: true }}
        className="relative z-0 pt-10 cursor-default"
      >
        <h1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-4xl tracking-tight uppercase lg:pt-24 sm:text-7xl md:text-8xl lg:text-9xl"
        >
          i&apos;m henry &bull;
          <br />
          <span className="text-gray-500">freelance</span>
          <br /> web developer
        </h1>
        <img
          className="hidden lg:block absolute top-10 right-10 z-[-1] w-96 h-96 object-cover object-center filter rounded-lg brightness-[90%] opacity-80"
          src="https://plus.unsplash.com/premium_photo-1671851793638-6288846c8b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80"
          alt="profile-image"
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: "0.7" }}
        viewport={{ once: true }}
        className="flex flex-col justify-between gap-6 px-2 py-4 mt-10 lg:mt-20 md:flex-row"
      >
        <p className="max-w-lg text-lg font-semibold leading-7 text-gray-700 md:text-lg">
          Experienced in Next.js and Tailwind CSS, I specialize in crafting
          dynamic and SEO-friendly web applications. With a deep understanding
          of React and its ecosystem, I deliver scalable and visually appealing
          user interfaces.
        </p>
        <div className="flex flex-col gap-4">
          <p className="max-w-md text-lg font-semibold tracking-wide text-gray-800 md:text-xl">
            I develop beautiful web apps for businesses and individuals with a
            strong
            <i className="text-gray-500"> emphasis </i>
            on UI/UX design
          </p>
          <ContactMeModal />
        </div>
      </motion.section>
      <a
        href="#skills"
        className="flex justify-center py-1 mt-56 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      {/* skills */}
      <section id="skills" className="mt-20 lg:mt-32">
        <CustomSection
          title="skills"
          description="These are my favourite tools and technologies to create my projects"
          children={
            <section className="flex flex-wrap justify-center gap-12 mt-10 lg:justify-start">
              {skills.map((skill) => (
                <CustomHoverCard skill={skill} key={skill.name} />
              ))}
            </section>
          }
        />
      </section>
      {/* services */}
      <section id="services" className="mt-20">
        <CustomSection
          title="services"
          description="Here are the services that I offer"
          children={
            <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3">
              {services.map((icon) => {
                return <SpotlightCard icon={icon} key={icon.src} />;
              })}
            </div>
          }
        />
      </section>
    </section>
  );
}
