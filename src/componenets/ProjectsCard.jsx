// ProjectCard.jsx
import React from "react";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ img, name, description, technology, liveLink, clientSide, serverSide, marginTop }) {
  return (
    <div
      className="border border-primary rounded-2xl p-5 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
      style={{ marginTop }}
    >
      <img src={img} alt={name} className="w-full h-56 object-cover rounded-xl mb-4" />
      <h3 className="text-2xl font-bold text-primary mb-3">{name}</h3>

      <ul className="list-disc list-inside text-text mb-3 space-y-1">
        {description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mb-4"><strong>Technology:</strong> {technology}</p>

      <div className="flex flex-wrap gap-3">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition"> <MdOutlinePreview /> Live </a>
        <a href={clientSide} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition"> <FaGithub /> Client </a>
        <a href={serverSide} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-4 py-2 border border-primary rounded-full text-primary hover:bg-primary hover:text-white transition"> <FaGithub /> Server </a>
      </div>
    </div>
  );
}
