import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import {  NavLink,  } from "react-router";
import shariyerShazan from "../../public/assets/shariyer-shazan.jpg"

function HomePage() {

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center">
      {/* Background for Desktop (Left Side) */}
      <div
        className="hidden md:block absolute top-0 left-0 w-[50%] h-full bg-primary z-0 pointer-events-none"
        style={{
          clipPath: "polygon(0 -20%, 100% 100%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* Background for Mobile (Top) */}
      <div
        className="block md:hidden absolute top-0 left-0 w-full h-[70vh] bg-primary z-0 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 100%, 100% 50%, 0% 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center  gap-8 px-6 md:px-12 mt-[15vh] md:mt-0">
        {/* Image */}
        <img
          className="w-[80%] md:w-[40%] h-[50vh] md:h-[90vh] object-cover rounded-2xl shadow-lg "
          src={shariyerShazan}
          alt="Shariyer Shazan"
           title="Shariyer Shazan"
        />

        {/* Text */}
        <div className="text-center md:text-left flex-1 ">
          <div className="flex justify-center items-center">
          <div>
          <h1 className="text-3xl  md:text-5xl font-bold text-primary ">
            - I'm <span className="">Shariyer Shazan .</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer_",
              2000,
              "",
              "MERN Stack Developer_",
              2000,
              "",
              "Web Developer_",
              2000,
              "",
              "Mobile app Developer_",
              2000,
              "",
              "Next.js Developer_",
              2000,
              "",
              "React.js Developer_",
              2000,
              "",
              "React Native Developer_",
              2000,
              "",
              "JavaScript Developer_",
              2000,
              "",
              "Front-end Web Developer_",
              2000,
              "",
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-lg md:text-xl text-primary font-semibold mt-2"
          />

          <p className="flex flex-col gap-4 mt-4 text-left text-text  text-sm md:text-base max-w-md">
          <span >As a passionate MERN Stack developer, I enjoy building smooth, user-friendly web experiences that solve real-world problems. With a solid grip on React.js, Next.js, Node.js, Express, and MongoDB, I specialize in creating responsive interfaces and efficient backend systems.
          </span>
<span className="">Alongside, I’m experienced with Tailwind CSS and GitHub, which helps me maintain clean code and collaborate effectively. I always aim to learn and grow while crafting digital products that people actually love to use.</span>
          </p>
          </div>
          </div>

    
         <NavLink to={"/about"} className="flex justify-center items-center"> 
         <button  className="my-6  cursor-pointer group relative flex items-center  px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white">
 <span className="ml-8"> More About Me</span>
  <span className=" absolute -left-[4px]  flex items-center justify-center w-11 h-full rounded-full bg-primary text-white z-10">
    <FaArrowRight size={20}/>
  </span>

  {/* Background fill effect */}
  <span
    className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"
  ></span>
</button>
         </NavLink>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
