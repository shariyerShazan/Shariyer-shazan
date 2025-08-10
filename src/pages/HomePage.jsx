import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

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
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 px-6 md:px-12 mt-[15vh] md:mt-0">
        {/* Image */}
        <img
          className="w-[80%] md:w-[40%] h-[50vh] md:h-[90vh] object-cover rounded-xl shadow-lg"
          src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/502466123_1074990197848373_4703481125785257270_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hEFqsk_5EZEQ7kNvwG2GwdP&_nc_oc=Adnw73utmHTh6CVFhvvUV0qZyLo9A--UULTf-gH0OuspMi5JjKTx7ZpjN5us_onUmU0&_nc_zt=23&_nc_ht=scontent.fdac27-2.fna&_nc_gid=UCC3O5soLr-poJRLi_20OA&oh=00_AfXDwq3jqzivToxhC0uwZlZn8Bmx0LqwFC_l-soYJh-S8Q&oe=689ED497"
          alt="Profile"
        />

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl  md:text-5xl font-bold text-title">
            I am <span className="text-primary">Shariyer Shazan</span>
          </h2>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "",
              "MERN Stack Developer",
              2000,
              "",
              "Web Developer",
              2000,
              "",
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-lg md:text-xl text-primary font-semibold mt-2"
          />

          <p className="mt-4 text-text text-sm md:text-base max-w-md">
            Passionate about building modern, user-friendly, and efficient web
            applications with clean and scalable code.
          </p>

          <button className="group mt-6 flex items-center gap-3 border border-primary px-5 py-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-white">
            More About Me
            <span className="p-2 rounded-full bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
