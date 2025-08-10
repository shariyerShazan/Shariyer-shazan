import React from 'react'
import ProjectCard from '../componenets/ProjectsCard';

function PortfolioPage() {
      const projects = [
    {
      img: "https://via.placeholder.com/300x200.png?text=Project+One",
      name: "Project One",
      description: "This is a demo description of project one. It showcases React and Tailwind skills.",
      liveLink: "https://project-one-live.netlify.app",
      clientSide: "https://github.com/username/project-one-client",
      serverSide: "https://github.com/username/project-one-server",
    },
    {
      img: "https://via.placeholder.com/300x200.png?text=Project+Two",
      name: "Project Two",
      description: "Project two is an e-commerce site with payment integration and user authentication.",
      liveLink: "https://project-two-live.netlify.app",
      clientSide: "https://github.com/username/project-two-client",
      serverSide: "https://github.com/username/project-two-server",
    },
    {
      img: "https://via.placeholder.com/300x200.png?text=Project+Three",
      name: "Project Three",
      description: "This project is a social media platform clone using MERN stack with real-time chat.",
      liveLink: "https://project-three-live.netlify.app",
      clientSide: "https://github.com/username/project-three-client",
      serverSide: "https://github.com/username/project-three-server",
    },
    {
      img: "https://via.placeholder.com/300x200.png?text=Project+Four",
      name: "Project Four",
      description: "A blog platform with markdown support and admin dashboard for content management.",
      liveLink: "https://project-four-live.netlify.app",
      clientSide: "https://github.com/username/project-four-client",
      serverSide: "https://github.com/username/project-four-server",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-8 relative">
      <h2 className="text-4xl font-bold  text-primary text-center">My Projects</h2>

      {/* For md and above: flex layout with two columns & vertical divider */}
      <div className="hidden md:flex relative mt-42 gap-8">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary opacity-30 translate-x-[-50%]" />

        {/* Left column (even idx) */}
<div className="flex flex-col gap-8 w-1/2">
  {projects
    .filter((_, idx) => idx % 2 === 0)
    .map(({ img, name, description, liveLink, clientSide, serverSide }, idx) => (
      <ProjectCard
        key={idx}
        img={img}
        name={name}
        description={description}
        liveLink={liveLink}
        clientSide={clientSide}
        serverSide={serverSide}
        marginTop={idx === 0 ? "" : ""}
      />
    ))}
</div>

{/* Right column (odd idx) */}
<div className="flex flex-col gap-8 w-1/2">
  {projects
    .filter((_, idx) => idx % 2 === 1)
    .map(({ img, name, description, liveLink, clientSide, serverSide }, idx) => (
      <ProjectCard
        key={idx}
        img={img}
        name={name}
        description={description}
        liveLink={liveLink}
        clientSide={clientSide}
        serverSide={serverSide}
        marginTop={idx === 0 ? "-120px" : ""}
      />
    ))}
</div>

      </div>

      {/* For mobile & small screens: simple single column grid without filter and margin */}
      <div className="md:hidden grid grid-cols-1 gap-8">
        {projects.map(({ img, name, description, liveLink, clientSide, serverSide }, idx) => (
          <ProjectCard
            key={idx}
            img={img}
            name={name}
            description={description}
            liveLink={liveLink}
            clientSide={clientSide}
            serverSide={serverSide}
            marginTop="0" 
          />
        ))}
      </div>
    </section>
  );

}

export default PortfolioPage
