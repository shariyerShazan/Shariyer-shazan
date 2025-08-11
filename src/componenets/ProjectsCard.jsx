import React from "react";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ img, name, description, liveLink, clientSide, serverSide, marginTop }) {
  return (
    <div
      className={`border border-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col`}
      style={{ marginTop }}
    >
      <img src={img} alt={name} className="w-full h-56 object-cover " />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
        <p className="text-text  flex-grow">{description}</p>
        <div className="mt-4 flex justify-center items-center gap-2 space-y-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group relative flex items-center px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white"
          >
            <span className="ml-8">Live</span>
            <span className="absolute -left-[4px] flex items-center justify-center w-11 h-full rounded-full bg-primary text-white z-10">
              <MdOutlinePreview size={20} />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"></span>
          </a>

          <a
            href={clientSide}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group relative flex items-center px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white"
          >
            <span className="ml-8">Client</span>
            <span className="absolute -left-[4px] flex items-center justify-center w-11 h-full rounded-full bg-primary text-white z-10">
              <FaGithub size={20} />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"></span>
          </a>

          <a
            href={serverSide}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group relative flex items-center px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white"
          >
            <span className="ml-8">Server</span>
            <span className="absolute -left-[4px] flex items-center justify-center w-11 h-full rounded-full bg-primary text-white z-10">
              <FaGithub size={20} />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

