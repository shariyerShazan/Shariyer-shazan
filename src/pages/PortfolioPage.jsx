import React from 'react'
import ProjectCard from '../componenets/ProjectsCard';
import flatflow from "../assets/flatflow.png"
import noHunger from "../assets/noHunger.png"

function PortfolioPage() {
      const projects = [
    {
      img: flatflow,
      name: "FlatFlow - Building management web application",
      description: "FlatFlow is a building management web application that simplifies apartment operations. It includes tenant management, rent tracking, rent payment, create coupon and apply coupon system, maintenance requests, maintenance members, notice posting, and digital record keeping. The system supports a secure payment system and offers role-based access for users, members, and admins—ensuring smooth, organized, and transparent management for all.",
      liveLink: "https://flatflow.netlify.app/",
      clientSide: "https://github.com/shariyerShazan/FlatFlow-client",
      serverSide: "https://github.com/shariyerShazan/FlatFlow-server",
    },
    {
      img: noHunger,
      name: "NoHunger - Food donate web application",
      description: "NoHunger is a food donation web application that connects donors with those in need. Users can easily donate excess food, while others can collect and distribute it efficiently. The system includes role-based access for users, and donor, along with a secure tracking and coordination system to ensure food reaches the right hands on time.",
      liveLink: "https://nohunger-ccf5b.web.app/",
      clientSide: "https://github.com/shariyerShazan/NoHunger",
      serverSide: "https://github.com/shariyerShazan/NoHunger-server",
    },
    // {
    //   img: "https://via.placeholder.com/300x200.png?text=Project+Three",
    //   name: "Project Three",
    //   description: "This project is a social media platform clone using MERN stack with real-time chat.",
    //   liveLink: "https://project-three-live.netlify.app",
    //   clientSide: "https://github.com/username/project-three-client",
    //   serverSide: "https://github.com/username/project-three-server",
    // },
    // {
    //   img: "https://via.placeholder.com/300x200.png?text=Project+Four",
    //   name: "Project Four",
    //   description: "A blog platform with markdown support and admin dashboard for content management.",
    //   liveLink: "https://project-four-live.netlify.app",
    //   clientSide: "https://github.com/username/project-four-client",
    //   serverSide: "https://github.com/username/project-four-server",
    // },
  ];

  return (
    <section className="max-w-7xl min-h-screen mx-auto p-8 relative">
      <h2 className="text-4xl font-bold  text-primary text-center">Shariyer Shazan's <span className='text-text'>Projects</span></h2>

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
